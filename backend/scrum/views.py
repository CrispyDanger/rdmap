from .models import Project
from .serializers import ProjectSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user




class ProjectView(APIView):
    def get(self, request, format=None):
        projects = Project.objects.filter(user_id=request.user)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
    

    def post(self, request, format=None):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create your views here.
