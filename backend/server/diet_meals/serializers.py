from rest_framework import serializers
from .models import DietMeal

class DietMealSerializer(serializers.ModelSerializer):
    class Meta:
        model = DietMeal
        fields = ['id', 'diet_id', 'meal', 'name', 'describe', 
                  'product1_weight', 'product1_id',
                  'product2_weight', 'product2_id',
                  'product3_weight', 'product3_id',
                  'product4_weight', 'product4_id',
                  'product5_weight', 'product5_id',
                  'product6_weight', 'product6_id',
                  'product7_weight', 'product7_id',
                  'product8_weight', 'product8_id',
                  'product9_weight', 'product9_id',
                  'product10_weight', 'product10_id',
                  'product11_weight', 'product11_id',
                  'product12_weight', 'product12_id']