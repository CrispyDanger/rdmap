from contrib.views import char_count
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from scrum import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("projects/", views.ProjectView.as_view()),
    path("projects/<slug:slug>/", views.ProjectDetailView.as_view()),
    path("projects/<slug:slug>/board/", views.ScrumBoardView.as_view()),
    path("projects/<slug:slug>/board/tasks", views.ScrumBoardDetailView.as_view()),
]
