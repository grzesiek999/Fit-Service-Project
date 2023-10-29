from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.core.mail import EmailMessage
from .tokens import AccountActivationTokenGenerator

class AccountActivation:
    def sendEmailActivation(self, request, user, user_email):
        account_activation_token = AccountActivationTokenGenerator()
        mail_subject = 'Fit Service aktywacja konta'
        message = render_to_string("activate_account.html") 
        '''{
            'user': user.name,
            'domain': get_current_site(request).domain,
            'uid': force_bytes(user.pk),
            'token': account_activation_token.make_token(user),
            "protocol": 'https' if request.is_secure() else 'http'
        })
        '''
        email = EmailMessage(mail_subject, message, to=[user_email])
        if email.send():
            return True
        else:
            return False