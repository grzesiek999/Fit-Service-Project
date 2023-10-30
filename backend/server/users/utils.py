from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
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