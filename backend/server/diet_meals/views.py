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
    
class EditDietMealView(APIView):
    def patch(self, request):
        diet_meal_id = request.data.get('id')
        try:
            diet_meal = DietMeal.objects.get(id=diet_meal_id)
            serializer = DietMealSerializer(diet_meal, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
        except DietMeal.DoesNotExist:
            return Response({'error': 'diet meal doesnt exist'})
        

class GetByIdView(APIView):
    def get(self, request):
        diet_meal_id = request.query_params.get('id')
        try:
            diet_meal = DietMeal.objects.get(id=diet_meal_id)
            serializer = DietMealSerializer(diet_meal)
            return Response(serializer.data)
        except DietMeal.DoesNotExist:
            return Response({'error': 'diet meal doesnt exist'})



class GetAllForDietByKindView(APIView):
    def get(self, request):
        diet_id = request.query_params.get('diet_id')
        meal = request.query_params.get('meal', None)
        if meal:
            diet_meals = DietMeal.objects.filter(diet_id=diet_id, meal=meal)
        else:
            diet_meals = DietMeal.objects.filter(diet_id=diet_id)
        if diet_meals.exists():
            serializer = DietMealSerializer(diet_meals, many=True)
            return Response(serializer.data)
        else:
            return Response({'message': 'none'})


class DeleteDietMealView(APIView):
    def delete(self, request):
        id = request.data.get('id')
        DietMeal.objects.filter(pk=id).delete()
        return Response({'message': 'object deleted succesfully'})
