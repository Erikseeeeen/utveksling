from django.db import models

# Create your models here.

class University(models.Model):
    name = models.CharField(max_length=1023)
    country = models.CharField(max_length=1023)
    city = models.CharField(max_length=1023)

    class Meta:
        verbose_name_plural = "Universities"

    def __str__(self):
        return self.name
