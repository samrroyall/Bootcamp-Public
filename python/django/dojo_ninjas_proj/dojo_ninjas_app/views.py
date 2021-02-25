from django.shortcuts import render, redirect
from . import models

def update_dojo(request):
    request.session["dojos"] = ([
        {
            "id": d.id, 
            "name": d.name,
        } for d in models.Dojo.objects.all() 
    ])
    return request

def update_ninja(request):
    request.session["ninjas"] = ([
        { 
            "name": f"{n.first_name} {n.last_name}",
            "dojo_id": n.dojo_id.id, 
        } for n in models.Ninja.objects.all() 
    ])
    return request

# Create your views here.
def index(request):
    if "dojos" not in request.session:
        request = update_dojo(request)
        
    if "ninjas" not in request.session:
        request = update_ninja(request) 

    context = {
        "dojos": request.session.get("dojos"),
        "ninjas": request.session.get("ninjas"),
    }

    return render(request, "index.html", context)
                
def add_dojo(request):
    models.Dojo.objects.create(
        name=request.POST.get("name"),
        city=request.POST.get("city"),
        state=request.POST.get("state"),
    )
    update_dojo(request)
    return redirect("/")

def add_ninja(request):
    models.Ninja.objects.create(
        first_name=request.POST.get("first_name"),
        last_name=request.POST.get("last_name"),
        dojo_id=models.Dojo.objects.get(id=int(request.POST.get("dojo"))),
    )
    update_ninja(request)
    return redirect("/")
