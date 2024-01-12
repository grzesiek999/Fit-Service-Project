from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import DietSerializer
from .models import Diet


class AddDietView(APIView):
    def post(self, request):
        serializer = DietSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)