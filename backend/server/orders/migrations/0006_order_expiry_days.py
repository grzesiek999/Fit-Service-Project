# Generated by Django 4.2.6 on 2024-01-15 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0005_order_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='expiry_days',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
