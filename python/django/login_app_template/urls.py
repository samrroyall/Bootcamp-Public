from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_index),
    path('attempt_login', views.attempt_login),
    path('attempt_registration', views.attempt_registration),
    path('logout', views.logout),
]
