from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import DietSerializer
from .models import Diet
from orders.models import Order


class AddDietView(APIView):
    def post(self, request):
        serializer = DietSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)
    

class EditDietView(APIView):
    def patch(self, request):
        diet_id = request.data.get('id')    
        try:
            diet = Diet.objects.get(id=diet_id)
            serializer = DietSerializer(diet, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
        except Diet.DoesNotExist:
            return Response({'error': 'Diet doesnt found'})
        

class GetDietByUserIdView(APIView):
    def get(self, request):
        user_id = request.data.get('user_id')
        orders = Order.objects.filter(user_id=user_id)
        if orders.exists():
            temp = orders[0]
            for order in orders:
                if temp.created_at < order.created_at:
                    temp = order
            last_order = Order.objects.get(id=temp.id)
            try:
                diet = Diet.objects.get(id=last_order.diet_id.pk)
                serializer = DietSerializer(diet)
                return Response(serializer.data)
            except Diet.DoesNotExist:
                return Response({'error': 'diet doesnt exist for this user'})
        else:
            return Response({'error': 'order doesnt exist for this user'})