from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env.bool("DEBUG")

ALLOWED_HOSTS = ["django", "127.0.0.1", "localhost"]

INSTALLED_APPS += [
    "django_extensions",
]
