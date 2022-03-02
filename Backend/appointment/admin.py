from django.contrib import admin
from users.models import Appointee

from appointment.models import *

admin.site.register(Appointment)
admin.site.register(Comment)

