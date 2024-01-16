from django.urls import path
from .views import AddMessageView, GetMessageView

urlpatterns = [
    path('add', AddMessageView.as_view()),
    path('get', GetMessageView.as_view()),
]