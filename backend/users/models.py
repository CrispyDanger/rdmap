from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError("USERS MUST HAVE EMAIL ADDRESS")

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)


        user.set_password(password)
        user.save()

        return user      


    # def create_superuser(self, email, name, password=None):
    #     if not email:
    #       raise ValueError("USERS MUST HAVE EMAIL ADDRESS")

    #     email = self.normalize_email(email)
    #     superuser = self.model(email=email, name=name)

    #     superuser.set_password(password)
    #     superuser.save()

    #     return superuser



class UserProxy(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=254, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now=False, auto_now_add=True)
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = UserAccountManager()


    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self) -> str:
        return self.email