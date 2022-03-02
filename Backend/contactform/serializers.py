from django.db.models import fields
from rest_framework import serializers

from .models import ContactFormData


class ContactFormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=ContactFormData
        fields=('fName', 'lName', 'email', 
        'message' )
