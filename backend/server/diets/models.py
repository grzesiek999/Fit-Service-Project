from django.db import models


class Diet(models.Model):
    describe = models.TextField(blank=True, null=True)
    kcal = models.IntegerField(blank=True, null=True)
    proteins = models.FloatField(blank=True, null=True)
    carbohydrates = models.FloatField(blank=True, null=True)
    fats = models.FloatField(blank=True, null=True)
    fiber = models.FloatField(blank=True, null=True)
    fluids = models.FloatField(blank=True, null=True)