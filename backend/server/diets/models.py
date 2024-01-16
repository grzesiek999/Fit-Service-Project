from django.db import models
from user_messages.models import UserMessage


class Diet(models.Model):
    user_message_id = models.ForeignKey(
        UserMessage,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    describe = models.TextField(blank=True, null=True)
    kcal = models.IntegerField(blank=True, null=True)
    proteins = models.FloatField(blank=True, null=True)
    carbohydrates = models.FloatField(blank=True, null=True)
    fats = models.FloatField(blank=True, null=True)
    fiber = models.FloatField(blank=True, null=True)
    fluids = models.FloatField(blank=True, null=True)