from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'user_id', 'diet_id', 'user_message_id', 'expiry_days', 'payment_status', 'created_at', 'expiry_date', 'price']