from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from .tokens import AccountActivationTokenGenerator
from .models import User
from .tokens import AccountActivationTokenGenerator



class AccountActivation:
    def sendEmailActivation(self, request, user, user_email):
        account_activation_token = AccountActivationTokenGenerator()
        mail_subject = 'Fit Service aktywacja konta'

        user_name = user.name
        protocol = 'https' if request.is_secure() else 'http'
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = account_activation_token.make_token(user)
        message = f"Witaj {user_name}\n\n"
        message += f"Aby aktywować swoje konto, kliknij w poniższy link:\n\n"
        message += f"{protocol}://localhost:3000/account_confirm/{uid}/{token}"
        email = EmailMessage(mail_subject, message, to=[user_email])
        if email.send():
            return True
        else:
            return False
        
    def AccountActivationCheck(self, uidb64, token):
                
        account_activation_token = AccountActivationTokenGenerator()
        user = None
        activate_status = False

        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.filter(pk=uid).first()     
        except:
            user = None
        if(user is not None and account_activation_token.check_token(user, token)):
            user.is_active = True
            user.save()
            activate_status = True

        return activate_status
    

class PasswordRestore():
    def SendPasswordRestore(self, request, user, user_email):
        password_restore_token = AccountActivationTokenGenerator()
        mail_subject = 'Fit Service zmiana hasła'

        user_name = user.name
        protocol = 'https' if request.is_secure() else 'http'
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = password_restore_token.make_token(user)
        message = f"Witaj {user_name}\n\n"
        message += f"Aby ustawić nowe hasło, kliknij w poniższy link:\n\n"
        message += f"{protocol}://localhost:3000/set_new_password/{uid}/{token}"
        email = EmailMessage(mail_subject, message, to=[user_email])
        if email.send():
            return True
        else:
            return False
        
    def SetNewPassword(self, uidb64, token, password):
        password_restore_token = AccountActivationTokenGenerator()
        user = None
        set_password_status = False

        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.filter(pk=uid).first()     
        except:
            user = None
        if(user is not None and password_restore_token.check_token(user, token)):
            user.set_password(password)
            user.save()
            set_password_status = True

        return set_password_status

        