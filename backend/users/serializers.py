from .models import UserProxy
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

# from rest_framework import serializers


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = UserProxy
        fields = ['id','email','name','password', 'date_joined']

