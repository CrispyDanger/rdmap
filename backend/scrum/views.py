from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Project
from .serializers import ProjectSerializer, ScrumBoardSerializer


class ProjectView(APIView):
    def get(self, request, format=None):
        projects = Project.objects.filter(user_id=request.user)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProjectSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectDetailView(APIView):
    def get_object(self, slug):
        try:
            return Project.objects.filter(slug=slug)
        except Project.DoesNotExist:
            return status.HTTP_404_NOT_FOUND

    def get(self, request, slug, format=None):
        project = self.get_object(slug)
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data)


class ScrumBoardView(APIView):
    def get_project(self, slug):
        project = Project.objects.get(slug=slug)
        return project

    def post(self, request, slug, format=None):
        data = request.data
        data["project"] = slug
        print(data)
        serializer = ScrumBoardSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ScrumBoardDetailView(APIView):
    def get_object(self, slug):
        try:
            return Project.objects.filter(slug=slug)
        except Project.DoesNotExist:
            return status.HTTP_404_NOT_FOUND

    def get(self, slug, format=None):
        project = self.get_object(slug)
        serializer = ProjectSerializer(project, many=True)
        return Response(serializer.data)
