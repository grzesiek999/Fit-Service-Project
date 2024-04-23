from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import OrderSerializer
from .models import Order
from .utils import OrderMessages
from django.utils import timezone
from datetime import timedelta
from diets.models import Diet


class AddOrderView(APIView):
    def post(self, request):
        message = OrderMessages()
        user_id = request.data.get('user_id')

        serializer = OrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        if message.sendOrderConfirmation(user_id):
            return Response(serializer.data)
        else:
            return Response({"error": "sending email message error"})
    

class SetPaymentStatusView(APIView):
    def patch(self, request):
        message = OrderMessages()
        user_id = request.data.get('user_id')
        order = Order.objects.filter(user_id=user_id).order_by('-created_at').first()

        if not order:
            return Response("No orders found", status=404)

        order.payment_status = True
        order.save()
        serializer = OrderSerializer(order)
        if message.sendPaymentConfirmation(user_id):
            return Response(serializer.data)
        else:
            return Response({"error": "sending email message error"})
    

class ActivateOrderView(APIView):
    def patch(self, request):
        message = OrderMessages()
        user_id = request.data.get('user_id')
        order = Order.objects.filter(user_id=user_id).order_by('-created_at').first()

        if not order:
            return Response("No orders found", status=404)

        order.expiry_date = timezone.now() + timedelta(days=order.expiry_days)
        order.save()
        serializer = OrderSerializer(order)
        if message.sendDietReadyInformation(user_id):
            return Response(serializer.data)
        else:
            return Response({"error": "sending email message error"})
    

class GetOrderByUserIdView(APIView):
    def get(self, request):
        user_id = request.query_params.get('user_id')
        order = Order.objects.filter(user_id=user_id).order_by('-created_at').first()

        if not order:
            return Response("No orders found", status=404)
        
        serializer = OrderSerializer(order)
        return Response(serializer.data)


class GetOrdersToMakeView(APIView):
    def get(self, request):
        orders = Order.objects.filter(payment_status=True, expiry_date__isnull=True).order_by('-created_at')

        if not orders:
            return Response("No orders found", status=404)
        
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
    

class DeleteOrderView(APIView):
    def delete(self, request):
        order_id = request.data.get('order_id')
        order = Order.objects.get(pk=order_id)
        diet = order.diet_id
        message = order.user_message_id
        
        diet.delete()
        message.delete()
        order.delete()
        
        return Response("Order deleted succesfull")
    

class GetByOrderIdView(APIView):
    def get(self, request):
        order_id = request.query_params.get('order_id')
        order = Order.objects.get(pk=order_id)

        if not order:
            return Response('Order doeasnt found', status=404)
        
        serializer = OrderSerializer(order)
        return Response(serializer.data)
    

class GetOrdersHistoryView(APIView):
    def get(self, request):
        orders = Order.objects.filter(payment_status=True, expiry_date__isnull=False).order_by('-created_at')

        if not orders:
            return Response("No orders found", status=404)
        
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)