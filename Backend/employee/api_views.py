import smtplib

from appointment.models import *
from appointment.serializers import *
from django.conf import settings
from django.core.mail import send_mail
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
    permission_classes = [IsAuthenticated, IsEmployee]

    def get(self, request):
        error = None
        try:
            return Response(
                {
                    'appointments': AppointmentSerializer(
                        request.user.employee.appointment_set.all().order_by("-id"),
                        many=True
                    ).data,
                }, 
                status=200
            )
        except Exception as e:
            error = str(e )
        return Response({'error': error}, status=400)
class Appointee(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsEmployee]

    def get(self, request, format=None):
        error = None
        try:
            appointee_list = [{'id': appointee.id, 'name': appointee.user.name, 'email': appointee.user.email} for appointee in Appointee.objects.all()] 
            return Response({'appointee_list': appointee_list}, status=200)
        except Exception as e:
            error = str(e)
        return Response({'error': error}, status=400)

class DeclineAppointment(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsEmployee]
    
    def post(self, request):
        error = None 
        try:
            appointment = request.user.employee.appointment_set.get(id=request.data['id'])
            if appointment.status == Appointment.DECLINED:
                raise Exception(f"Appointment with id {appointment.id} is Already Declined! ")
            
            appointment.status = Appointment.DECLINED
            appointment.save()
            try:
                subject = f"({appointment.subject}) Appointment Declined"
                message = f"Your appointment on the subject {appointment.subject} with appointed datetime: {appointment.appointed_datetime} is declined by the employee {appointment.employee.user.name} ({appointment.employee.user.email})!"
                html_message = f"<h3>Your appointment status will be updated to <b style='color: purple'>DECLINED</b>!</h3><br><p>{message}</p>"
                send_mail(
                    subject = subject, 
                    message = message, 
                    html_message = html_message,
                    from_email = settings.EMAIL_HOST_USER, 
                    recipient_list = settings.EMAIL_RECEIVING_USER + [appointment.appointee.user.email]
                )
            except smtplib.SMTPException as exception:
                # print(f"===> Send mail failed! --> ", exception)
                return Response({'id': request.data['id'], 'message': f"Failed to send message to the email {exception}"}, status=200)
            
            return Response({'id': request.data['id']}, status=200)
        except Exception as e:
            error = str(e)
        return Response({'error': error}, status=400)
class AcceptAppointment(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsEmployee]
    
    def post(self, request):
        error = None 
        try:
            # print(f"===> request.data: ", request.data)
            appointment = request.user.employee.appointment_set.get(id=request.data['id'])
            if appointment.status == Appointment.ACCEPTED:
                raise Exception(f"Appointment with id {appointment.id} is Already Approved! ")
            
            appointment.status = Appointment.ACCEPTED
            appointment.save()
            try:
                subject = f"({appointment.subject}) Appointment Approved"
                message = f"Your appointment on the subject {appointment.subject} with appointed datetime: {appointment.appointed_datetime} is approved by the employee {appointment.employee.user.name} ({appointment.employee.user.email})!"
                html_message = f"<h3>Your appointment status will be updated to <b style='color: green'>ACCEPTED</b>!</h3><br><p>{message}</p>"
                send_mail(
                    subject = subject, 
                    message = message, 
                    html_message = html_message,
                    from_email = settings.EMAIL_HOST_USER, 
                    recipient_list = settings.EMAIL_RECEIVING_USER + [appointment.appointee.user.email]
                )
            except smtplib.SMTPException as exception:
                #print(f"===> Send mail failed! --> ", exception)
                return Response({'id': request.data['id'], 'message': f"Failed to send message to the email {exception}"}, status=200)
                pass 
            
            return Response({'id': request.data['id']}, status=200)
        except Exception as e:
            error = str(e)
            #print(f"===> Exception : ", e)
        return Response({'error': error}, status=400)

class PendAppointment(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsEmployee]
    
    def post(self, request):
        error = None 
        try:
            appointment = request.user.employee.appointment_set.get(id=request.data['id'])
            if appointment.status == Appointment.PENDING:
                raise Exception(f"Appointment with id {appointment.id} is Already Approved! ")
            
            appointment.status = Appointment.PENDING
            appointment.save()
            try:
                subject = f"({appointment.subject}) Appointment Pended"
                message = f"Your appointment on the subject {appointment.subject} with appointed datetime: {appointment.appointed_datetime} is pended by the employee {appointment.employee.user.name} ({appointment.employee.user.email})!"
                html_message = f"<h3>Your appointment status will be updated to <b style='color: blue'>PENDING</b>!</h3><br><p>{message}</p>"
                send_mail(
                    subject = subject, 
                    message = message, 
                    html_message = html_message,
                    from_email = settings.EMAIL_HOST_USER, 
                    recipient_list = settings.EMAIL_RECEIVING_USER + [appointment.appointee.user.email]
                )
            except smtplib.SMTPException as exception:
                #print(f"===> Send mail failed! --> ", exception)
                return Response({'id': request.data['id'], 'message': f"Failed to send message to the email {exception}"}, status=200)
            
            return Response({'id': request.data['id']}, status=200)
        except Exception as e:
            error = str(e)
        return Response({'error': error}, status=400)


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, IsEmployee])
def getAppointmentsCounts(request):
    appointments = request.user.employee.appointment_set.all().count()
    accepted_appointments = request.user.employee.appointment_set.filter(status=Appointment.ACCEPTED).count()
    pending_appointments = request.user.employee.appointment_set.filter(status=Appointment.PENDING).count()
    declined_appointments = request.user.employee.appointment_set.filter(status=Appointment.DECLINED).count()

    return Response(
        {
            'total': appointments,
            'accepted': accepted_appointments,
            'pending': pending_appointments,
            'declined': declined_appointments
        }, 
        status=200
    )
