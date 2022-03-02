# from django.conf import settings
# from django.conf.urls.static import static
# from django.contrib import admin
# from django.shortcuts import redirect
# from django.urls import include, path, re_path
# from django.views.generic import TemplateView

# urlpatterns = [
#     re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
#     path('admin/', admin.site.urls),
#     path('accounts/', include('djoser.urls')),
#     path('accounts/', include('djoser.urls.authtoken')),
#     path('employee/', include('employee.urls')),
#     path('appointee/', include('appointee.urls')),
    
# ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.shortcuts import redirect
from django.urls import include, path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('djoser.urls')),
    path('accounts/', include('djoser.urls.authtoken')),
    path('employee/', include('employee.urls')),
    path('appointee/', include('appointee.urls')),
    path('contactform/', include('contactform.urls')),
   path('', TemplateView.as_view(template_name='index.html'))
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

     

 