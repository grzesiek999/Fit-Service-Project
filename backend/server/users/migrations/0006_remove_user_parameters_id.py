# Generated by Django 4.2.6 on 2023-12-02 11:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_rename_parameters_user_parameters_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='parameters_id',
        ),
    ]