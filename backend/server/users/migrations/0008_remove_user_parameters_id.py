# Generated by Django 4.2.6 on 2023-12-02 11:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_user_parameters_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='parameters_id',
        ),
    ]
