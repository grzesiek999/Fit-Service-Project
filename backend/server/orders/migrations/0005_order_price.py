# Generated by Django 4.2.6 on 2024-01-15 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0004_order_expiry_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='price',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
