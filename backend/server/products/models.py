from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255, unique=True)
    weight = models.IntegerField(default=100)
    energy = models.IntegerField()
    proteins = models.FloatField()
    carbohydrates = models.FloatField()
    fats = models.FloatField()

    USERNAME_FIELD = 'name'
    REQUIRED_FIELDS = []