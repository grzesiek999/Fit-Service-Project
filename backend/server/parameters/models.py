from django.db import models
from django.utils import timezone
from users.models import User

class Parameters(models.Model):
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    created_at = models.DateTimeField(default=timezone.now)
    SEX = [
        (0, 'not define'),
        (1, 'man'),
        (2, 'women'),
    ]
    sex = models.IntegerField(
        choices=SEX,
        default=0
    )
    age = models.IntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    bmi = models.FloatField(
        blank=True,
        null=True,
    )
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