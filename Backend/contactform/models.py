from django.db import models


class ContactFormData(models.Model):
    fName=models.CharField(max_length=200, verbose_name="First Name")
    lName=models.CharField(max_length=200, verbose_name="Last Name")
    email=models.CharField(max_length=200)
    message=models.TextField()
    
    
    def __str__(self):
        return self.email
    
