from django.urls import path, include
from .views import RegisterView, LoginView, UserView, LogoutView, ConfirmAccountView, SendEmailAgainView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('confirm_email', ConfirmAccountView.as_view()),
    path('send_email_again', SendEmailAgainView.as_view()),
]
