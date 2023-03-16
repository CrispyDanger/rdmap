from django.contrib import admin

from .models import Project, ScrumBoard, Task


class ScrumBoardAdmin(admin.ModelAdmin):
    list_display = ("name", "project", "slug", "created_at", "modified_at")
    empty_value_display = "-empty-"


class TaskAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "scrum_board",
        "slug",
        "task_type",
        "created_at",
        "modified_at",
    )
    empty_value_display = "-empty-"


class ProjectAdmin(admin.ModelAdmin):
    list_display = ("name", "user_id", "slug", "created_at", "modified_at")
    empty_value_display = "-empty-"


admin.site.register(ScrumBoard, ScrumBoardAdmin)
admin.site.register(Task, TaskAdmin)
admin.site.register(Project, ProjectAdmin)

# Register your models here.
