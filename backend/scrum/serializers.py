from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Project, ScrumBoard, TYPE_CHOICE

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['name','user_id', 'scrum_board', 'created_at', 'modified_at']