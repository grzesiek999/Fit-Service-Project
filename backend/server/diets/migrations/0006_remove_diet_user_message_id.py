# Generated by Django 4.2.6 on 2024-03-20 22:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('diets', '0005_alter_diet_fluids'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='diet',
            name='user_message_id',
        ),
    ]
