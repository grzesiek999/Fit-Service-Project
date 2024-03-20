from django.contrib import admin
from django.urls import path, re_path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Fit Service API",
        default_version='v1',
        description="API do aplikacji FitService",
        terms_of_service="https://www.grzegorzpasich.pl",
        contact=openapi.Contact(email="grzegorz.pasich@o2.pl"),
        license=openapi.License(name="License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('users.urls')),
    path('api/products/', include('products.urls')),
    path('api/parameters/', include('parameters.urls')),
    path('api/diets/', include('diets.urls')),
    path('api/orders/', include('orders.urls')),
    path('api/user_messages/', include('user_messages.urls')),
    path('api/diet_meals/', include('diet_meals.urls')),
    path('api/diets_prices/', include('diets_prices.urls')),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
