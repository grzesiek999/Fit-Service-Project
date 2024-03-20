from rest_framework import serializers
from .models import DietsPrices

class DietsPricesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DietsPrices
        fields = ['id', 'diet_type', 'price', 'created_at']