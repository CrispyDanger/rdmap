import uuid

from django.db import models
from django.utils import timezone
from django_extensions.db.fields import AutoSlugField

TYPE_CHOICE = [
    ("NA", "Not Assigned"),
    ("TD", "To Do"),
    ("IP", "In Progress"),
    ("CP", "Completed"),
]


class Project(models.Model):
    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20, null=False, default="New Project")
    slug = AutoSlugField(populate_from=["name"])
    user_id = models.ForeignKey("users.UserProxy", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class ScrumBoard(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=20, default="New Scrumboard")
    slug = AutoSlugField(populate_from=["name"])
    project = models.OneToOneField(
        Project, on_delete=models.CASCADE, related_name="scrumboards"
    )
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "ScrumBoard"
        verbose_name_plural = "ScrumBoards"

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=50, default="New Task")
    slug = AutoSlugField(populate_from=["name"])
    scrum_board = models.ForeignKey(
        ScrumBoard, on_delete=models.CASCADE, related_name="tasks"
    )
    task_type = models.CharField(choices=TYPE_CHOICE, max_length=20, default="NA")
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    modified_at = models.DateTimeField(auto_now=True)


# Create your models here.
