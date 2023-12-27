from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ParametersSerializer
from .models import Parameters


class AddParametersView(APIView):
    def post(self, request):
        serializer = ParametersSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)
    

class GetAllUserParametersView(APIView):
    def post(self, request):
        user_id = request.data['user_id']
        parameters = Parameters.objects.filter(user_id=user_id)
        
        if parameters.exists():
            serializer = ParametersSerializer(parameters, many=True)
            return Response(serializer.data)
        else:
            return Response({'message': 'user dont have any parameters'})
        

class GetLastUserParametersView(APIView):
    def post(self, request):
        user_id = request.data['user_id']
        parameters = Parameters.objects.filter(user_id=user_id)

        if parameters.exists():
            temp = parameters[0]
            for param in parameters:
                if temp.created_at < param.created_at:
                    temp = param
    
            serializer = ParametersSerializer(temp)
            return Response(serializer.data)
        else:
            return Response({'message': 'user dont have any parameters'})
    

class EditParametersView(APIView):
    def post(self, request):
        parameters_id = request.data['parameters_id']
        
        try:
            parameters = Parameters.objects.get(id=parameters_id)
            serializer = ParametersSerializer(parameters, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors)
        except Parameters.DoesNotExist:
            return Response({'error': 'Parameters doesnt found'})
