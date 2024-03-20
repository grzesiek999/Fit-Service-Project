from django.urls import path
from .views import AddDietPrice, GetLastAllDietsPrices, GetSingleDietPrice

urlpatterns = [
    path('add', AddDietPrice.as_view()),
    path('get', GetLastAllDietsPrices.as_view()),
    path('get_single', GetSingleDietPrice.as_view()),
]