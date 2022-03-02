from django.urls import include, path
from rest_framework.routers import DefaultRouter

from employee.api_views import *
from employee.views import *

router = DefaultRouter()

app_name = "employee"
urlpatterns = [ 
    path('api', include(router.urls)),
    path('api/appointments', Appointments.as_view(), name="appointments"),
    path('api/decline-appointment', DeclineAppointment.as_view(), name="decline_appointment"),
    path('api/accept-appointment', AcceptAppointment.as_view(), name="accept_appointment"),
    path('api/pend-appointment', PendAppointment.as_view(), name="pend_appointment"),
    path('api/get-appointments-counts', getAppointmentsCounts, name="get_appointments_counts"),
]
