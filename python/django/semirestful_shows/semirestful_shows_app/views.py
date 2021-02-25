from django.shortcuts import render, redirect
from django.contrib import messages
from datetime import date
from . import models

def index(request):
    return redirect("/shows")

def shows(request):
    context = {
        "shows": models.Show.objects.all()
    }
    return render(request, "shows.html", context)

def new(request):
    return render(request, "new.html")

def show(request, id):
    context = {
        "show": models.Show.objects.get(id=id),
    }
    return render(request, "show.html", context)

def edit(request, id):
    context = {
        "show": models.Show.objects.get(id=id),
    }
    return render(request, "edit.html", context)

def add_show(request):
    # check for validation errors
    errors = models.Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for err in errors.values():
            print(err)
            messages.error(request, err)
        return redirect("/shows/new")

    new_show = models.Show.objects.create(
        title=request.POST.get("title"),
        network=request.POST.get("network"),
        release_date=date.fromisoformat(request.POST.get("release_date")),
        description=request.POST.get("desc")
    )
    return redirect(f"/shows/{new_show.id}")

def update_show(request, id):
    # check for validation errors
    errors = models.Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for err in errors.values():
            messages.error(request, err)
        return redirect(f"/shows/{id}/edit")

    show = models.Show.objects.get(id=id)
    if request.POST.get("title") != "":
        show.title=request.POST.get("title")
    if request.POST.get("network") != "":
        show.network=request.POST.get("network")
    if request.POST.get("release_date") != "":
        show.release_date=request.POST.get("release_date")
    if request.POST.get("desc") != "":
        show.description=request.POST.get("desc")
    show.save()
    return redirect(f"/shows/{id}")

def delete_show(request, id):
    models.Show.objects.get(id=id).delete()
    return redirect("/shows")
