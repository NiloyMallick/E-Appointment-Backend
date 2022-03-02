from rest_framework.permissions import BasePermission


class IsEmployee(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_employee

class IsAppointee(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_appointee
        
class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_admin
