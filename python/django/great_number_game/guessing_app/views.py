from django.shortcuts import render, redirect
from random import randint 

# Create your views here.
def index(request):

    if ("number" not in request.session or
        "guess" not in request.session or
        "tries" not in request.session):
        request.session["number"] = randint(1, 100)
        return render(request, 'index.html')

    if request.session["guess"] < request.session["number"]:
        result = -1
    elif request.session["guess"] > request.session["number"]:
        result = 1
    else:
        result = 0

    context = {
        "result": result, 
        "guess": request.session["guess"],
        "tries": request.session["tries"],
    }

    return render(request, 'index.html', context)

def guess(request):
    if "tries" not in request.session:
        request.session["tries"] = 0
    request.session["tries"] += 1
    request.session["guess"] = int(request.POST["guess"])
    return redirect("/")

def reset(request):
    del request.session["number"]
    del request.session["guess"]
    del request.session["tries"]
    return redirect("/")
