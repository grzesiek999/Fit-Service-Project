from django.urls import path
from .views import AddDietMealView

urlpatterns = [
    path('add', AddDietMealView.as_view()),
]