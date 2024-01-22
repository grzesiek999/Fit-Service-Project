# Generated by Django 4.2.6 on 2024-01-16 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('diets', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='diet',
            name='kind',
        ),
        migrations.AddField(
            model_name='diet',
            name='fiber',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]