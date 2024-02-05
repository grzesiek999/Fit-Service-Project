from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserMessageSerializer
from .models import UserMessage


class AddMessageView(APIView):
    def post(self, request):
        serializer = UserMessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        message = serializer.save()
        response = {
            'id': message.id,
        }
        return Response(response)
    

class GetMessageView(APIView):
    def get(self, request):
        message_id = request.data.get('message_id')

        try:
            message = UserMessage.objects.get(id=message_id)
            serializer = UserMessageSerializer(message)
            return Response(serializer.data)
        except UserMessage.DoesNotExist:
            return Response({'error': 'message doesnt exist'})