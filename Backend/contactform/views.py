from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.authentication import (SessionAuthentication,
                                           TokenAuthentication)
from rest_framework.permissions import BasePermission, IsAuthenticated

from .models import ContactFormData
from .serializers import ContactFormDataSerializer


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_admin

class ContactFormDataViewSet(viewsets.ModelViewSet):
    authentication_classes = [SessionAuthentication, TokenAuthentication] 
    permission_classes = [IsAuthenticated, IsAdmin]

    queryset=ContactFormData.objects.all().order_by('-id')
    serializer_class=ContactFormDataSerializer
    