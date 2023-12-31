from django.urls import path
from .views import AddParametersView, GetAllUserParametersView, GetLastUserParametersView, EditParametersView

urlpatterns = [
    path('add', AddParametersView.as_view()),
    path('all_users_parameters', GetAllUserParametersView.as_view()),
    path('last_users_parameters', GetLastUserParametersView.as_view()),
    path('edit', EditParametersView.as_view()),
]