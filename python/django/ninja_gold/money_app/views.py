from django.shortcuts import render, redirect, HttpResponse
from random import randint
from time import strftime, gmtime

# Create your views here.
def index(request):
    if "log" not in request.session:
        request.session["log"] = []
    if "gold" not in request.session:
        request.session["gold"] = 0

    context = {
        "log": request.session["log"],
        "gold": request.session["gold"],
    }

    return render(request, "index.html", context);

def process_money(request):
    earnings = randint(
        int(request.POST["min"]), 
        int(request.POST["max"])
    )
    request.session["gold"] += earnings
    entry = {
        "timestamp": strftime("%Y-%m-%d %H:%M:%S %p", gmtime()),
        "earnings": abs(earnings),
        "location": request.POST["location"],
        "loss": earnings < 0,
    }
    request.session["log"] = [entry] + request.session["log"]

    return redirect("/")
