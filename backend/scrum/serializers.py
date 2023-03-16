from rest_framework import serializers

from .models import Project, ScrumBoard, Task


class ProjectSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Project
        fields = ["name", "slug", "scrumboards", "user_id", "created_at", "modified_at"]
        read_only_fields = ["scrumboards", "slug"]
        depth = 1


class ScrumBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScrumBoard
        fields = ["name", "project", "tasks", "created_at", "modified_at"]
        depth = 1


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ["name", "task_type", "scrum_board", "created_at", "modified_at"]
