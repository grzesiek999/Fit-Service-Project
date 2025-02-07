from django.urls import path
from .views import AddOrderView, SetPaymentStatusView, ActivateOrderView, GetOrderByUserIdView, GetOrdersToMakeView, DeleteOrderView, GetByOrderIdView, GetOrdersHistoryView

urlpatterns = [
    path('create_order', AddOrderView.as_view()),
    path('set_payment_status', SetPaymentStatusView.as_view()),
    path('activate_order', ActivateOrderView.as_view()),
    path('get', GetOrderByUserIdView.as_view()),
    path('get_to_make', GetOrdersToMakeView.as_view()),
    path('delete', DeleteOrderView.as_view()),
    path('getby_orderid', GetByOrderIdView.as_view()),
    path('history', GetOrdersHistoryView.as_view()),
]