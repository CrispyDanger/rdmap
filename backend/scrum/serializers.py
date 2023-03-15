from django.contrib.auth import get_user_model
from rest_framework import serializers

from .models import TYPE_CHOICE, Project, ScrumBoard


class ProjectSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Project
        fields = ["name", "id", "scrumboards", "user_id", "created_at", "modified_at"]
        read_only_fields = ["scrumboards", "id"]
        depth = 1


class ScrumBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScrumBoard
        fields = ["name", "project", "created_at", "modified_at"]
