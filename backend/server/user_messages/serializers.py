from rest_framework import serializers
from .models import UserMessage

class UserMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMessage
        fields = ['id', 'health_problems', 'allergies', 'eating', 'target']