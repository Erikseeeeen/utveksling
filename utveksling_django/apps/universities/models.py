from django.db import models

# Create your models here.

class University(models.Model):
    name = models.CharField(max_length=1023)
    slug = models.CharField(max_length=1023)
    country = models.CharField(max_length=1023)
    city = models.CharField(max_length=1023)
    homepage = models.CharField(max_length=1023)
    lat = models.CharField(max_length=65535)
    lng = models.CharField(max_length=65535)
    programs_serialized = models.CharField(max_length=65535)

    class Meta:
        verbose_name_plural = "Universities"

    def __str__(self):
        return self.name
