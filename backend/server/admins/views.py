from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import AdminSerializer
from .models import Admin
from django.contrib.auth.models import update_last_login
import jwt, datetime
from .utils import AccountActivation, PasswordRestore


class RegisterView(APIView):
    def post(self, request):
        response = Response()
        serializer = AdminSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        admin_email = request.data.get('email')
        admin = Admin.objects.filter(email=admin_email).first()
        activation = AccountActivation()
        if activation.sendEmailActivation(request, admin, admin_email) is False:
            response.data = {
                'message': 'activation link sended error'
            }
        else:
            return Response(serializer.data)
    

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        normalize_email = email.lower()
        
        admin = Admin.objects.filter(email=normalize_email).first()

        if admin is None:
            raise AuthenticationFailed('User not found!')
        
        if not admin.check_password(password):
            raise AuthenticationFailed('Incorrect password!')
        
        payload = {
            'id': admin.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
            'iat': datetime.datetime.utcnow()
        }
        
        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()
        response.data = {
            'jwt': token
        }
        
        response.set_cookie(key='jwt', value=token, httponly=True)
        update_last_login(None, admin)
        return response
        

class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        admin = Admin.objects.filter(id=payload['id']).first()
        serializer = AdminSerializer(admin)

        return Response(serializer.data)
    

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'cookies deleted'
        }
        return response
    

class ConfirmAccountView(APIView):
    def post(self, request):
        uidb64 = request.data['uid']
        token = request.data['token']
        response = Response()

        activation_status=AccountActivation()
        if(activation_status.AccountActivationCheck(uidb64, token) == True):
            response.data = {
                'message': 'activation successful'
            }
        else:
            response.data = {
                'message': 'activation link is invalid'
            }

        return response
    
class SendEmailAgainView(APIView):
    def post(self, request):
        response = Response()
        admin_email = request.data.get('email')
        admin = Admin.objects.filter(email=admin_email).first()
        activation = AccountActivation()
        if activation.sendEmailActivation(request, admin, admin_email) is False:
            response.data = {
                'message': 'activation link sended error'
            }
        else:
            response.data = {
                'message': 'activation link sended again'
            }
        
        return response
        

class SendPasswordRestoreView(APIView):
    def post(self, request):
        response = Response()
        admin_email = request.data.get('email')
        admin = Admin.objects.filter(email=admin_email).first()
        
        if admin is not None:
            password_reset = PasswordRestore()
            if password_reset.SendPasswordRestore(request, admin, admin_email) is False:
                response.data = {
                    'message': 'password reset link sended error'
                }
            else: 
                response.data = {
                    'message': 'password reset link sended'
                }
        else:
            response.data = {
                'message': 'Incorrect email address'
            }
            raise AuthenticationFailed('Admin not found!')
        
        return response
    

class SetNewPasswordView(APIView):
    def post(self, request):
        response = Response()
        uidb64 = request.data['uid']
        token = request.data['token']
        password = request.data['password']

        password_reset = PasswordRestore()
        if(password_reset.SetNewPassword(uidb64, token, password) == True):
            response.data = {
                'message': 'password change successful'
            }
        else:
            response.data = {
                'message': 'password change error'
            }
        return response