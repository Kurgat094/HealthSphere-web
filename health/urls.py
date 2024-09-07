from django.contrib import admin
from .views import *
from django.urls import path


urlpatterns=[
    path('',signup,name="signup"),
    path('home/',home,name="home"),
]