from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'weight', 'energy', 'proteins', 'carbohydrates', 'fats']

    def create(self, validated_data):
        name = validated_data.pop('name', None)
        normalize_name = name.lower()
        product = self.Meta.model(**validated_data)
        if normalize_name is not None:
            product.name = normalize_name 

        product.save()
        return product