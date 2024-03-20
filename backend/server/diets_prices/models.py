from django.db import models
from django.utils import timezone


class DietsPrices(models.Model):
    diet_type = models.CharField(max_length=255)
    price = models.FloatField()
    created_at = models.DateTimeField(default=timezone.now)