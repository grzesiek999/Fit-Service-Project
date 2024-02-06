from django.urls import path
from .views import AddDietView, EditDietView, GetDietByUserIdView

urlpatterns = [
    path('add', AddDietView.as_view()),
    path('edit', EditDietView.as_view()),
    path('get', GetDietByUserIdView.as_view()),
]