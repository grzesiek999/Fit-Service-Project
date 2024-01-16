from django.urls import path
from .views import AddDietView, EditDietView, GetDietByUserIdView

urlpatterns = [
    path('add', AddDietView.as_view()),
    path('edit', EditDietView.as_view()),
    path('get_by_usrid', GetDietByUserIdView.as_view()),
]