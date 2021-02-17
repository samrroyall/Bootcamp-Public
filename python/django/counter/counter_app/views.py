from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    if "counter" not in request.session:
        request.session["counter"] = 0;
    request.session["counter"] += 1;
    return render(request, "index.html", {"count": request.session["counter"]})

def clear(request):
    request.session["counter"] = 0;
    return redirect("/")

