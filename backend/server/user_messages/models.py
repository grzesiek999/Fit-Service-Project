from django.db import models


class UserMessage(models.Model):
    health_problems = models.TextField(blank=True, null=True)
    allergies = models.TextField(blank=True, null=True)
    eating = models.TextField()
    target = models.TextField()
