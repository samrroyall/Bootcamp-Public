from django.shortcuts import render, redirect
from time import gmtime, strftime

# Create your views here.
def index(request):
    context = {
        "date": strftime("%Y-%m-%d", gmtime()),
        "time": strftime("%H:%M %p", gmtime()),
    }
    return render(request, "index.html", context)

def time_display(request):
    return redirect("/")
