from django.urls import path
from .views import AddDietMealView, EditDietMealView, GetByIdView, GetAllForDietByKindView, DeleteDietMealView

urlpatterns = [
    path('add', AddDietMealView.as_view()),
    path('edit', EditDietMealView.as_view()),
    path('get_byid', GetByIdView.as_view()),
    path('get_bydiet', GetAllForDietByKindView.as_view()),
    path('delete', DeleteDietMealView.as_view()),
]