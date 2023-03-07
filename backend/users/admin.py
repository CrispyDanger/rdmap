from django.contrib import admin
from .models import UserProxy


class UserAdmin(admin.ModelAdmin):
    list_display = ('email','name', 'date_joined')

admin.site.register(UserProxy, UserAdmin)
# Register your models here.

