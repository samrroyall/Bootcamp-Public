from django.shortcuts import render, redirect
from django.contrib import messages
from . import models

import bcrypt
from datetime import date

def index(request):
    if "userid" in request.session:
        return redirect("/success")
    return render(request, "index.html")

def success(request):
    if "userid" not in request.session:
        return redirect("/")
    user_objs = models.User.objects.filter(email=request.session.get("userid"))
    if len(user_objs) == 1:
        context = {
            "user": user_objs[0]
        }
        return render(request, "success.html", context)
    raise Exception(f"Multiple users exist with email '{request.session.get('userid')}'.")

def is_valid(request):
    # if errors in login or registration, redirect back to root
    errors = models.User.objects.basic_validator(request.POST)
    if errors is not None and len(errors) > 0:
        for err in errors.values():
            messages.error(request, err)
        return False
    return True

def login(request):
    if not is_valid(request):
        return redirect("/")
    user_objs = models.User.objects.filter(email=request.POST.get("email"))
    if len(user_objs) == 1:
        request.session["userid"] = user_objs[0].email
        return redirect("/success")
    raise Exception(f"Multiple users exist with email '{request.POST.get('email')}'.")

def register(request):
    if not is_valid(request):
        return redirect("/")
    new_user = models.User.objects.create(
        first_name=request.POST.get("first_name"),
        last_name=request.POST.get("last_name"),
        email=request.POST.get("email"),
        password=bcrypt.hashpw(
            request.POST.get("password").encode(), 
            bcrypt.gensalt()
        ).decode(),
        birthdate=date.fromisoformat(request.POST.get("birthdate")),
    )
    request.session["userid"] = new_user.email
    return redirect("/success")

def logout(request):
    del request.session['userid']
    return redirect("/")