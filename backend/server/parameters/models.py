from django.db import models
from django.utils import timezone


class Paremeters(models.Model):
    user_id = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)
    height = models.FloatField()
    weight = models.FloatField()
    bmi = models.FloatField()
    PHYSICAL_ACTIVITY_CHOICES = [
        (0, 'not define'),
        (1, 'brak aktywnosci fizycznej'),
        (2, 'mala aktywnosc fizyczna'),
        (3, 'umiarkowana aktywnosc fizyczna'),
        (4, 'duza aktywnosc fizyczna'),
        (5, 'codzienna aktywnosc fizyczna'),
    ]
    physic_activity = models.IntegerField(
        choices=PHYSICAL_ACTIVITY_CHOICES,
        default=0  
    )
    chest = models.FloatField()
    belly = models.FloatField()
    biceps = models.FloatField()
    arms = models.FloatField()
    thighs = models.FloatField()
    calves = models.FloatField()