from django.urls import path
from .views import AddProductView, GetProductsView

urlpatterns = [
    path('add', AddProductView.as_view()),
    path('get', GetProductsView.as_view()),
]