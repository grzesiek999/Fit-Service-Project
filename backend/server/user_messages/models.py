from django.db import models


class UserMessage(models.Model):
    health_problems = models.TextField()
    allergies = models.TextField()
    eating = models.TextField()
