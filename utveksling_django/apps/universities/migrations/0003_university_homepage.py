# Generated by Django 4.2.2 on 2023-06-27 21:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('universities', '0002_alter_university_options_university_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='university',
            name='homepage',
            field=models.CharField(default='null', max_length=1023),
            preserve_default=False,
        ),
    ]
