from django.db import models
from django.utils import timezone
from users.models import User
from diets.models import Diet


class Order(models.Model):
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    diet_id = models.ForeignKey(
        Diet,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    expiry_days = models.IntegerField()
    payment_status=models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)
    expiry_date = models.DateTimeField(blank = True, null = True)
    price = models.IntegerField()