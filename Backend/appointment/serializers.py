from rest_framework import serializers
from users.models import *

from appointment.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ['id', 'name', 'email']

class EmployeeSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Employee 
        fields = ['id', 'user']

class AppointeeSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Appointee
        fields = ['id', 'user']

class AppointmentSerializer(serializers.ModelSerializer):
    employee = EmployeeSerializer(read_only=True)
    appointee = AppointeeSerializer(read_only=True)
    status = serializers.SerializerMethodField()

    def get_status(self, instance):
        return [Appointment.PENDING, Appointment.ACCEPTED, Appointment.DECLINED].index(instance.status)
    class Meta:
        model = Appointment 
        fields = ['id', 'appointee', 'employee', 'subject', 'appointed_datetime', 'creation_datetime', 'status']

class CreateAppointmentSerializer(serializers.ModelSerializer):
    # employee = EmployeeSerializer(read_only=True)
    # employee_id = serializers.PrimaryKeyRelatedField(write_only=True, queryset=Employee.objects.all())
    id = serializers.IntegerField(read_only=True)
    status = serializers.SerializerMethodField()
    def get_status(self, instance):
        return [Appointment.PENDING, Appointment.ACCEPTED, Appointment.DECLINED].index(instance.status)
    
    creation_datetime = serializers.DateTimeField(read_only=True)
    class Meta:
        model = Appointment 
        fields = ['id', 'employee', 'subject', 'appointed_datetime', 'creation_datetime', 'status']

    def to_representation(self, instance):
        self.fields['employee'] = EmployeeSerializer()
        return super().to_representation(instance)
