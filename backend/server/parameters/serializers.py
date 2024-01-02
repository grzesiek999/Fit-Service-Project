from rest_framework import serializers
from .models import Parameters


class ParametersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Parameters
        fields = ['id', 'user_id', 'created_at', 'sex', 'age', 'height', 'weight', 'bmi', 'physic_activity', 'chest', 'belly', 'biceps', 'arms', 'thighs', 'calves']

    def create(self, validated_data):
        height = validated_data.get('height')
        weight = validated_data.get('weight')
        bmi = weight / ((height/100)**2)
        parameters = self.Meta.model(**validated_data)
        if bmi is not None:
            parameters.bmi = bmi 
        parameters.save()
        return parameters
    
    def update(self, instance, validated_data):
        if 'weight' in validated_data or 'height' in validated_data:
            new_weight = validated_data.get('weight', instance.weight)
            new_height = validated_data.get('height', instance.height)
            if new_weight and new_height:
                new_bmi = new_weight / ((new_height/100)**2)
                validated_data['bmi'] = new_bmi
        
        return super().update(instance, validated_data)