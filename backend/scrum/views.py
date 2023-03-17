from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Project, ScrumBoard
from .serializers import ProjectSerializer, ScrumBoardSerializer, TaskSerializer


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
        serializer = ScrumBoardSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ScrumBoardDetailView(APIView):
    def get_object(self, slug):
        try:
            project = Project.objects.filter(slug=slug)[0]
        except Project.DoesNotExist:
            return status.HTTP_404_NOT_FOUND
        try:
            return ScrumBoard.objects.filter(project=project)
        except ScrumBoard.DoesNotExist:
            return status.HTTP_404_NOT_FOUND

    def get(self, request, slug, format=None):
        scrumboard = self.get_object(slug)
        serializer = ScrumBoardSerializer(scrumboard, many=True)
        return Response(serializer.data)

    def post(self, request, slug, format=None):
        data = request.data
        data["scrum_board"] = self.get_object(slug)[0].id
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
