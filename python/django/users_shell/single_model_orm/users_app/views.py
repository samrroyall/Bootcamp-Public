from django.shortcuts import render, redirect
from . import models

# Create your views here.
def index(request):
    context = {
        "users": models.Users.objects.all(),
    }
    return render(request, "index.html", context)

def add_user(request):
    models.Users.objects.create(
        first_name = request.POST.get("first_name"),
        last_name = request.POST.get("last_name"),
        email_address = request.POST.get("email_address"),
        age = request.POST.get("age"),
    )
    return redirect("/")
