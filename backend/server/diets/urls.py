from django.urls import path
from .views import AddDietView

urlpatterns = [
    path('add', AddDietView.as_view()),
]