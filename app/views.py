from django.shortcuts import render

# Create your views here.

def index(requests):
    
    return render(requests, 'index.html')

def login(requests):

    return render(requests, 'login.html')

def register(requests):

    return render(requests, 'registration.html')