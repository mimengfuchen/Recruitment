"""Recruitment_System URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import xadmin
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from Recruitment_System.settings import DEBUG, MEDIA_ROOT
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from apps.freshman.views import *
urlpatterns = [
    path('xadmin/', xadmin.site.urls),
    url(r'^', include('apps.freshman.urls', namespace='freshman')),
    path(r'interview/', include('apps.interviewer.urls')),
    path(r'data/', include('apps.data.urls')),
    url(r'ckeditor',include('ckeditor_uploader.urls'))
]
from django.views.static import serve
if DEBUG:
    urlpatterns+=url(r'^media/(?P<path>.*)/$', serve, {"document_root": MEDIA_ROOT}),
# handler404 = page_not_found
# handler500 = server_error
