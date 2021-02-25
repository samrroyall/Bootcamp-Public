from django.shortcuts import render, redirect
from . import models

# Create your views here.
def books(request):
    context = {
        "books": models.Book.objects.all(),
    }
    return render(request, "books.html", context)

def get_book(request, id):
    context = {
        "book": models.Book.objects.get(id=id),
        "authors": models.Book.objects.get(id=id).authors.all(),
        "other_authors": models.Author.objects.all(),
    }
    return render(request, "book.html", context)

def add_book(request):
    models.Book.objects.create(
        title=request.POST.get("title"),
        desc=request.POST.get("desc")
    )
    return redirect("/")

def authors(request):
    context = {
        "authors": models.Author.objects.all(),
    }
    return render(request, "authors.html", context)

def get_author(request, id):
    context = {
        "author": models.Author.objects.get(id=id),
        "books": models.Author.objects.get(id=id).books.all(),
        "other_books": models.Book.objects.all(),
    }
    return render(request, "author.html", context)

def add_author(request):
    models.Author.objects.create(
        first_name=request.POST.get("first_name"),
        last_name=request.POST.get("last_name"),
        notes=request.POST.get("notes")
    )
    return redirect("/authors")

def add_link(request):
    author = models.Author.objects.get( id=int(request.POST.get("author")) )
    author.books.add( 
        models.Book.objects.get(id=int(request.POST.get("book")))
    )
    author.save()
    return redirect("/")
