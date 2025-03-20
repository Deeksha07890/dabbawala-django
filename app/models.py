from django.db import models

# Create your models here.

class UserDetail(models.Model):
    username = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.IntegerField(max_length=10)

class Item(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=200)
    Ingredients = models.TextField(max_length=100)
