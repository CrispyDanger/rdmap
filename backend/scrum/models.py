from django.db import models

class ScrumBoard(models.Model):
    name = models.CharField(max_length=20)
    

    class Meta:
        verbose_name = ("ScrumBoard")
        verbose_name_plural = ("ScrumBoards")

    def __str__(self):
        return self.name
    


class Task(models.Model):
    TYPE_CHOICE = [
        ("NA", "Not Assigned"),
       ("IP", "In Progress"),
       ("CP", "Completed")
    ]


    name = models.CharField(max_length=50)
    scrum_board = models.ForeignKey(ScrumBoard, on_delete=models.CASCADE, related_name="tasks")
    task_type = models.CharField(choices=TYPE_CHOICE, max_length=20)


class Project(models.Model):
    class Meta:
        verbose_name = ("Project")
        verbose_name_plural = ("Projects")

    user_id = models.ForeignKey("users.UserProxy", on_delete=models.CASCADE)
    scrum_board = models.OneToOneField(ScrumBoard, on_delete=models.CASCADE)
    

    def __str__(self):
        return self.name


# Create your models here.
