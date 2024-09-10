from django.contrib import admin
from .views import *
from django.urls import path


urlpatterns=[
    path('',signin,name="signin"),
    path('home/',home,name="home"),
    path('signup/',signup,name="signup"),
    path('signin/',signin,name="signin"),
    path('cart/',cart,name="cart"),
    path('offer/',offer,name="offer"),
]