# Generated by Django 4.2.6 on 2024-04-01 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diet_meals', '0004_alter_dietmeal_meal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dietmeal',
            name='meal',
            field=models.IntegerField(choices=[(1, 'FIRST MEAL'), (2, 'SECOND MEAL'), (3, 'THIRD MEAL'), (4, 'FOURTH MEAL'), (5, 'FIFTH MEAL'), (6, 'SIXTH MEAL')]),
        ),
    ]
