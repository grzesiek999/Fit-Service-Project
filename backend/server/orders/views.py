from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import OrderSerializer
from .models import Order
from .utils import OrderMessages
from django.utils import timezone
from datetime import timedelta


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
        orders = Order.objects.filter(user_id=user_id)

        if orders.exists():
            temp = orders[0]
            for order in orders:
                if temp.created_at < order.created_at:
                    temp = order
            last_order = Order.objects.get(id=temp.id)
            last_order.payment_status = True
            last_order.save()
            serializer = OrderSerializer(last_order)
            if message.sendPaymentConfirmation(user_id):
                return Response(serializer.data)
            else:
                return Response({"error": "sending email message error"})
            
        return Response({'error': 'order doesnt error'})
    

class ActivateOrderView(APIView):
    def patch(self, request):
        message = OrderMessages()
        user_id = request.data.get('user_id')
        orders = Order.objects.filter(user_id=user_id)

        if orders.exists():
            temp = orders[0]
            for order in orders:
                if temp.created_at < order.created_at:
                    temp = order
            last_order = Order.objects.get(id=temp.id)
            last_order.expiry_date = timezone.now() + timedelta(days=last_order.expiry_days)
            last_order.save()
            serializer = OrderSerializer(last_order)
            if message.sendDietReadyInformation(user_id):
                return Response(serializer.data)
            else:
                return Response({"error": "sending email message error"})
            
        return Response({'error': 'order doesnt exist'})
    

class GetOrderByUserIdView(APIView):
    def get(self, request):
        user_id = request.data.get('user_id')
        orders = Order.objects.filter(user_id=user_id)

        if orders.exists():
            temp = orders[0]
            for order in orders:
                if temp.created_at < order.created_at:
                    temp = order
            last_order = Order.objects.get(id=temp.id)
            serializer = OrderSerializer(last_order)
            return Response(serializer.data)
        else:
            return Response({'error': 'order doesnt exist'})
