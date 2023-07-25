"""
URL configuration for utveksling_django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.urls import re_path as url
from rest_framework import routers
from apps.universities.views import *
from apps.core.views import *

router = routers.DefaultRouter()
#API
router.register(r'university', UniversityViewSet, basename='university')
router.register(r'program', ProgramViewSet, basename='program')

urlpatterns = [
    path('', frontpage, name='frontpage'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls), name='api'),
    path('api/input_program/', input_program, name='input_program'),
    url('^csv-uploader-program/$', CsvUploaderProgram.as_view(), name='csv-uploader-program'),
    url('^csv-uploader-university/$', CsvUploaderUniversity.as_view(), name='csv-uploader-university'),
]
