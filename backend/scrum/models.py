from django.db import models
from django.utils import timezone

TYPE_CHOICE = [
        ("NA", "Not Assigned"),
       ("IP", "In Progress"),
       ("CP", "Completed")
]


class ScrumBoard(models.Model):
    name = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    modified_at = models.DateTimeField(auto_now=True)
    

    class Meta:
        verbose_name = ("ScrumBoard")
        verbose_name_plural = ("ScrumBoards")

    def __str__(self):
        return self.name
    


class Task(models.Model):


    name = models.CharField(max_length=50, default="New Task")
    scrum_board = models.ForeignKey(ScrumBoard, on_delete=models.CASCADE, related_name="tasks")
    task_type = models.CharField(choices=TYPE_CHOICE, max_length=20)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    modified_at = models.DateTimeField(auto_now=True)

class Project(models.Model):
    class Meta:
        verbose_name = ("Project")
        verbose_name_plural = ("Projects")

    name = models.CharField(max_length=20, null=False, default="New Project")
    user_id = models.ForeignKey("users.UserProxy", on_delete=models.CASCADE)
    scrum_board = models.OneToOneField(ScrumBoard, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    modified_at = models.DateTimeField(auto_now=True)




    def __str__(self):
        return self.name


# Create your models here.
