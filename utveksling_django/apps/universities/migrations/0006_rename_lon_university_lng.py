# Generated by Django 4.2.2 on 2023-07-23 13:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('universities', '0005_university_lat_university_lon'),
    ]

    operations = [
        migrations.RenameField(
            model_name='university',
            old_name='lon',
            new_name='lng',
        ),
    ]
