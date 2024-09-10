from django.shortcuts import render

# Create your views here.
def signin(request):
    return render(request,"signin.html")

def home(request):
    return render(request,"home.html")


def signup(request):
    return render(request,"register.html")

def cart(request):
    return render(request,"cart.html")

def offer(request):
    return render(request,"offers.html")