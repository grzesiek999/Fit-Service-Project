from django.urls import path
from .views import RegisterView, LoginView, UserView, LogoutView, ConfirmAccountView, SendEmailAgainView, SendPasswordRestoreView, SetNewPasswordView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('confirm_email', ConfirmAccountView.as_view()),
    path('send_email_again', SendEmailAgainView.as_view()),
    path('send_password_restore', SendPasswordRestoreView.as_view()),
    path('set_new_password', SetNewPasswordView.as_view()),
]
