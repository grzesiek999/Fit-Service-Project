from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from .models import User
from django.contrib.auth.models import update_last_login
import jwt, datetime
from .utils import AccountActivation, PasswordRestore


class RegisterView(APIView):
    def post(self, request):
        response = Response()
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        user_email = request.data.get('email')
        user = User.objects.filter(email=user_email).first()
        activation = AccountActivation()
        if activation.sendEmailActivation(request, user, user_email) is False:
            response.data = {
                'message': 'activation link sended error'
            }
        else:
            return Response(serializer.data)
    

class LoginView(APIView):
    def patch(self, request):
        email = request.data['email']
        password = request.data['password']
        normalize_email = email.lower()
        
        user = User.objects.filter(email=normalize_email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')
        
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect password!')
        
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
            'iat': datetime.datetime.utcnow()
        }
        
        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()
        response.data = {
            'jwt': token
        }
        
        response.set_cookie(key='jwt', value=token, httponly=True)
        update_last_login(None, user)
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

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)
    

class LogoutView(APIView):
    def delete(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'cookies deleted'
        }
        return response
    

class ConfirmAccountView(APIView):
    def patch(self, request):
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
        user_email = request.data.get('email')
        user = User.objects.filter(email=user_email).first()
        activation = AccountActivation()
        if activation.sendEmailActivation(request, user, user_email) is False:
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
        user_email = request.data.get('email')
        user = User.objects.filter(email=user_email).first()
        
        if user is not None:
            password_reset = PasswordRestore()
            if password_reset.SendPasswordRestore(request, user, user_email) is False:
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
            raise AuthenticationFailed('User not found!')
        
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
        
        
