# Generated by Django 4.2.6 on 2023-12-03 07:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parameters', '0005_alter_parameters_bmi'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parameters',
            name='bmi',
            field=models.FloatField(default=0),
        ),
    ]
