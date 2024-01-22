from django.urls import path
from .views import AddDietMealView, EditDietMealView, GetByIdView, GetAllForDietByKindView, DeleteDietMealView

urlpatterns = [
    path('add', AddDietMealView.as_view()),
    path('edit', EditDietMealView.as_view()),
    path('get_byid', GetByIdView.as_view()),
    path('get_for_diet_by_type', GetAllForDietByKindView.as_view()),
    path('delete', DeleteDietMealView.as_view()),
]