from rest_framework import serializers
from .models import Diet

class DietSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diet
        fields = ['id', 'kind', 'describe', 'kcal', 'proteins', 'carbohydrates', 'fats', 'fluids']