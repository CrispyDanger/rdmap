from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Project, ScrumBoard, TYPE_CHOICE

class ProjectSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(default=serializers.CurrentUserDefault())
    class Meta:
        model = Project
        fields = ['name', 'scrumboards','user_id' ,'created_at', 'modified_at']
        read_only_fields = ['scrumboards']

    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user_id'] = {"name":instance.user_id.name, "email": instance.user_id.email}
        return representation
    



