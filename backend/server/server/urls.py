from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('api/products/', include('products.urls')),
    path('api/parameters/', include('parameters.urls')),
    path('api/diets/', include('diets.urls')),
    path('api/orders/', include('orders.urls')),
]
