from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('leads.urls')),
    path('', include('accounts.urls')),
    #url(r'^admin/', admin.site.urls),
]
