from rest_framework import serializers
from .models import Paremeters


class ParametersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Paremeters
        fields = ['id', 'user_id', 'created_at', 'height', 'weight', 'bmi', 'physic_activity', 'chest', 'belly', 'biceps', 'arms', 'thighs', 'calves']