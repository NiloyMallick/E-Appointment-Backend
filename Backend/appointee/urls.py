from django.urls import include, path
from rest_framework.routers import DefaultRouter

from appointee.api_views import *
from appointee.views import *

router = DefaultRouter()

app_name = "appointee"
urlpatterns = [ 
    path('api', include(router.urls)),
    path('api/appointments', Appointments.as_view(), name="appointments"),
    path('api/get-employee-list', Employees.as_view(), name="get_employee_list"),
    path('api/delete-appointment', DeleteAppointment.as_view(), name="delete_appointment"),
    path('api/get-appointments-counts', getAppointmentsCounts, name="get_appointments_counts"),
]
