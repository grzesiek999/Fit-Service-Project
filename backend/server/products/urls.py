from django.urls import path
from .views import AddProductView, GetProductsView, GetProductByIDView, DeleteProductView, EditProductView

urlpatterns = [
    path('add', AddProductView.as_view()),
    path('get', GetProductsView.as_view()),
    path('getbyid', GetProductByIDView.as_view()),
    path('delete_product', DeleteProductView.as_view()),
    path('edit', EditProductView.as_view()),
]