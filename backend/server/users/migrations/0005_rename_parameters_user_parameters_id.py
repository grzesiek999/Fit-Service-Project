# Generated by Django 4.2.6 on 2023-12-02 11:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_parameters'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='parameters',
            new_name='parameters_id',
        ),
    ]
