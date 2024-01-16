from rest_framework import serializers
from .models import Diet

class DietSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diet
        fields = ['id', 'user_message_id', 'describe', 'kcal', 'proteins', 'carbohydrates', 'fats', 'fiber', 'fluids']