from django.urls import path
from .views import AddProductView, GetProductsView, GetProductByID

urlpatterns = [
    path('add', AddProductView.as_view()),
    path('get', GetProductsView.as_view()),
    path('getbyid', GetProductByID.as_view()),
]