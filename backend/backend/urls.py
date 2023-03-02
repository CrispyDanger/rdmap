from contrib.views import char_count
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework import routers
from users import views


# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)





urlpatterns = [
    path("admin/", admin.site.urls),
    # path("char_count", char_count, name="char_count"),
    # re_path(".*", TemplateView.as_view(template_name="index.html")),
    # path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),

]
