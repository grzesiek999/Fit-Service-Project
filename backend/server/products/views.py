from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Product



class AddProductView(APIView):
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    

class GetProductsView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class GetProductByIDView(APIView):
    def get(self, request):
        product_id = request.query_params.get('product_id')
        product = Product.objects.get(id=product_id)
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    

class DeleteProductView(APIView):
    def delete(self, request):
        id = request.data.get('id')
        Product.objects.filter(pk=id).delete()
        return Response({'message': 'object deleted succesfully'})
    

class EditProductView(APIView):
        def put(self, request):
            id = request.data['id']
        
            try:
                product = Product.objects.get(id=id)
                serializer = ProductSerializer(product, data=request.data, partial=True)

                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                else:
                    return Response(serializer.errors)
            except Product.DoesNotExist:
                return Response({'error': 'Parameters doesnt found'})
