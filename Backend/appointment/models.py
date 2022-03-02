from django.contrib.auth import get_user_model
from django.db import models
from users.models import *


class Appointment(models.Model):
    PENDING = "PENDING"
    ACCEPTED = "ACCEPTED"
    DECLINED = "DECLINED"

    STATUS_CHOICES = [ 
        (PENDING, "Pending"),
        (ACCEPTED, "Accepted"),
        (DECLINED, "Declined")
    ]

    appointee = models.ForeignKey(Appointee, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    creation_datetime = models.DateTimeField(auto_now_add=True)
    appointed_datetime = models.DateTimeField(null=True)
    subject = models.CharField(max_length=255)
    status = models.CharField(
        max_length=8, 
        choices=STATUS_CHOICES,
        default=PENDING
    )

    

class Comment(models.Model):
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    text = models.TextField(null=True)
    creation_datetime = models.DateTimeField(auto_now_add=True) 
