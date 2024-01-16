from django.core.mail import EmailMessage
from users.models import User




class OrderMessages:
    def sendOrderConfirmation(self, user_id):
        mail_subject = 'Fit Service złozenie zamówienia'
        user = User.objects.get(id=user_id)

        message = f"Witaj {user.name}\n\n"
        message += f"Dziękujemy za złozenie zamówienia.\n\n"
        message += f'Jeśli nie opłaciłeś jeszcze zamówienia moesz to zrobić w panelu uzytkownika w zakładce "Moje diety".\n\n'
        
        email = EmailMessage(mail_subject, message, to=[user.email])
        if email.send():
            return True
        else:
            return False
    
    def sendPaymentConfirmation(self, user_id):        
        mail_subject = 'Fit Service zamówienie zostało opłacone'
        user = User.objects.get(id=user_id)
        
        message = f"Witaj {user.name}\n\n"
        message += f"Dziękujemy za opłacenie zamówienia.\n\n"
        message += f'Plan dietetyczny zostanie storzony w przeciągu 3 dni roboczych.\n\n'
        
        email = EmailMessage(mail_subject, message, to=[user.email])
        if email.send():
            return True
        else:
            return False
    
    def sendDietReadyInformation(self, user_id):        
        mail_subject = 'Fit Service gotowy plan dietetyczny'
        user = User.objects.get(id=user_id)
        
        message = f"Witaj {user.name}\n\n"
        message += f"Proces tworzenia twojego planu dietetycznego dobiegł końca.\n\n"
        message += f'Gotowy plan dietetyczny znajdziesz w panelu uzytkownika w zakładce "Moje diety".\n\n'
        
        email = EmailMessage(mail_subject, message, to=[user.email])
        if email.send():
            return True
        else:
            return False
    