from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

from users.models import *


class UserRegisterSerializer(UserCreateSerializer):
    re_password = serializers.CharField(style={"input_type": "password"}, write_only=True, max_length=100)

    def create(self, validate_data):
        is_employee = validate_data.pop('is_employee', False)
        is_appointee = validate_data.pop('is_appointee', False)
        is_admin = validate_data.pop('is_admin', False)

        user = super().create(validate_data)
        if is_employee:
            user.is_employee = True 
            Employee.objects.create(user=user)
            
        elif is_appointee:
            user.is_appointee = True 
            Appointee.objects.create(user=user)

        elif is_admin:
            user.is_admin = True 
            Admin.objects.create(user=user)    
        user.save()

        return user 
    
    def validate(self, attrs):
        re_password = attrs.get('re_password')
        password = attrs.get('password')
        if re_password != password:
            raise serializers.ValidationError({'re_password': "Passwords Don't Match"})
        
        attrs.pop('re_password')
        return super().validate(attrs)
    
    class Meta(UserCreateSerializer.Meta):
        fields = ['name', 'email', 'is_employee', 'password', 're_password', 'is_appointee', 'is_admin']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ['id', 'name', 'email',  'is_employee', 'is_appointee','is_admin']
