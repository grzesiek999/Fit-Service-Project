from django.urls import path, include
from .views import RegisterView, LoginView, UserView, LogoutView, ConfirmAccountView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('confirm_email', ConfirmAccountView.as_view()),
]
