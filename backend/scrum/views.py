from .models import Project, ScrumBoard
from .serializers import ProjectSerializer, ScrumBoardSerializer
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user




class ProjectView(APIView):
    def get(self, request, format=None):
        projects = Project.objects.filter(user_id=request.user)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
    

    def post(self, request, format=None):
        serializer = ProjectSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ProjectDetailView(APIView):
    def get_object(self, pk):
        try:
            return Project.objects.filter(pk=pk)
        except Project.DoesNotExist:
            return status.HTTP_404_NOT_FOUND


    def get(self, request, pk, format=None):
        project = self.get_object(pk)
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data) 



class ScrumBoardView(APIView):
    def get_project(self, pk):
        project = Project.objects.get(id=pk)
        return project
    

    def post(self, request,pk, format=None):
        project = self.get_project(pk)
        scrumboard = ScrumBoard.objects.create(project=project)
        # serializer = ScrumBoardSerializer(data=scrumboard)
        if scrumboard:
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)