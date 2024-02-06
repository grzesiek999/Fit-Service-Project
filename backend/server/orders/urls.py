from django.urls import path
from .views import AddOrderView, SetPaymentStatusView, ActivateOrderView, GetOrderByUserIdView

urlpatterns = [
    path('create_order', AddOrderView.as_view()),
    path('set_payment_status', SetPaymentStatusView.as_view()),
    path('activate_order', ActivateOrderView.as_view()),
    path('get', GetOrderByUserIdView.as_view()),
]