from appointment.models import *
from appointment.serializers import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import (api_view, authentication_classes,
                                       permission_classes)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from users.models import *
from users.permissions import *


class Appointments(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAppointee]

    def get(self, request):
        error = None
        try:
            return Response(
                {
                    'appointments': AppointmentSerializer(
                        request.user.appointee.appointment_set.all().order_by("-id"), 
                        many=True
                    ).data
                }, 
                status=200
            )
        except Exception as e:
            error = str(e )
        return Response({'error': error}, status=400)

    def post(self, request):
        serializer = CreateAppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(appointee=request.user.appointee)
            return Response({"appointment": serializer.data}, status=200)
        return Response(serializer.errors, status=404)



class Employees(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAppointee]

    def get(self, request, format=None):
        error = None
        try:
            employee_list = [{'id': employee.id, 'name': employee.user.name, 'email': employee.user.email} for employee in Employee.objects.all()] 
            return Response({'employee_list': employee_list}, status=200)
        except Exception as e:
            error = str(e)
        return Response({'error': error}, status=400)



class DeleteAppointment(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAppointee]
    
    def post(self, request):
        error = None 
        try:
            request.user.appointee.appointment_set.get(id=request.data['id']).delete()
            return Response({'id': request.data['id']}, status=200)
        except Exception as e:
            error = str(e)
        return Response({'error': error}, status=400)

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsAppointee])
def getAppointmentsCounts(request):
    appointments = request.user.appointee.appointment_set.all().count()
    accepted_appointments = request.user.appointee.appointment_set.filter(status=Appointment.ACCEPTED).count()
    pending_appointments = request.user.appointee.appointment_set.filter(status=Appointment.PENDING).count()
    declined_appointments = request.user.appointee.appointment_set.filter(status=Appointment.DECLINED).count()
    # print(f"===============> ", appointments, accepted_appointments, pending_appointments, declined_appointments)
    return Response(
        {
            'total': appointments,
            'accepted': accepted_appointments,
            'pending': pending_appointments,
            'declined': declined_appointments
        }, 
        status=200
    )
