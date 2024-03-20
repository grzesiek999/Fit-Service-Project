from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DietsPrices
from .serializers import DietsPricesSerializer



class AddDietPrice(APIView):
    def post(self, request):
        serializer = DietsPricesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return(Response(serializer.data))
    
class GetLastAllDietsPrices(APIView):
    def get(self, request):

        d1_type = request.query_params.get('d1_type')
        d2_type = request.query_params.get('d2_type')
        d3_type = request.query_params.get('d3_type')

        d1 = DietsPrices.objects.filter(diet_type=d1_type).order_by('-created_at')
        d2 = DietsPrices.objects.filter(diet_type=d2_type).order_by('-created_at')
        d3 = DietsPrices.objects.filter(diet_type=d3_type).order_by('-created_at')

        response = {
            d1[0].diet_type: d1[0].price,
            d2[0].diet_type: d2[0].price,
            d3[0].diet_type: d3[0].price
        }

        return Response(response)
    
class GetSingleDietPrice(APIView):
    def get(self, request):

        d_type = request.query_params.get('d_type')

        d = DietsPrices.objects.filter(diet_type=d_type).order_by('-created_at')

        response = {d[0].diet_type: d[0].price}

        return Response(response)