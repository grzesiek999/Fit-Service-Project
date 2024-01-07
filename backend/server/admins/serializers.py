from rest_framework import serializers
from .models import Admin

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ['id', 'last_login', 'email', 'password', 'name', 'surname', 'created_at', 'is_active']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        email = validated_data.pop('email', None)
        normalize_email = email.lower()
        password = validated_data.pop('password', None)
        admin = self.Meta.model(**validated_data)
        if password is not None:
            admin.set_password(password)
        if normalize_email is not None:
            admin.email = normalize_email 
        
        admin.save()
        return admin