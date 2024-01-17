from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import DietMealSerializer
from .models import DietMeal


class AddDietMealView(APIView):
    def post(self, request):
        serializer = DietMealSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)