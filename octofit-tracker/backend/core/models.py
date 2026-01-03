from django.db import models


class UserProfile(models.Model):
    username = models.CharField(max_length=150, unique=True)
    display_name = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.username
