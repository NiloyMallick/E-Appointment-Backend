from rest_framework import serializers
from users.models import Employee


class EmployeeDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee 
        fields = '__all__'
