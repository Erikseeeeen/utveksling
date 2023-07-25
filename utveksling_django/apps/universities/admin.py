from django.contrib import admin
from django import forms
from .models import University, Program
import csv

# Register your models here.

admin.site.register(University)
admin.site.register(Program)
