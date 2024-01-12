from django.db import models


class Diet(models.Model):
    KIND = [
        (0, 'default'),
        (1, 'sport'),
        (2, 'health'),
    ]
    kind = models.IntegerField(
        choices=KIND,
        default=0
    )
    describe = models.TextField()
    kcal = models.IntegerField()
    proteins = models.FloatField()
    carbohydrates = models.FloatField()
    fats = models.FloatField()
    fluids = models.IntegerField()