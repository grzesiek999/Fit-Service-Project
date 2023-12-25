from django.urls import path
from .views import AddParametersView, GetParametersView, EditParametersView

urlpatterns = [
    path('add', AddParametersView.as_view()),
    path('users_parameters', GetParametersView.as_view()),
    path('edit', EditParametersView.as_view()),
]