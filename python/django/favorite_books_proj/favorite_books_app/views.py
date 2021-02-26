from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Book
from login_app.models import User

def index(request):
    if "userid" not in request.session:
        return redirect("/login")
    return redirect("/books")

def get_user(request):
    user_objs = User.objects.filter(email=request.session.get("userid"))
    if len(user_objs) == 1:
        return user_objs[0]
    raise Exception("More than one user found with current email!")

def books(request):
    if "userid" not in request.session:
        return redirect("/login")
    current_user = get_user(request)
    context = {
        "email": current_user.email,
        "first_name": current_user.first_name,
        "last_name": current_user.first_name,
        "books": Book.objects.all(),
        "favorites": [b.id for b in current_user.books_favorited.all()],
    }
    return render(request, "books.html", context)

def get_book(request, id):
    if "userid" not in request.session:
        return redirect("/login")
    current_user = get_user(request)
    context = {
        "email": current_user.email,
        "first_name": current_user.first_name,
        "last_name": current_user.first_name,
        "current_book": Book.objects.get(id=id),
        "is_favorite": id in [b.id for b in current_user.books_favorited.all()],
    }
    return render(request, "book.html", context)

def add_book(request):
    # get errors
    errors = Book.objects.basic_validator(request.POST)
    if errors is not None and len(errors) > 0:
        for err in errors.values():
            messages.error(request, err)
        return redirect("/books")

    current_user = get_user(request) 
    new_book = Book.objects.create(
        title=request.POST.get("title"),
        desc=request.POST.get("desc"),
        uploaded_by=current_user,
    )
    new_book.favorited_by.add(current_user)
    return redirect("/books")

def update_book(request):
    current_book = Book.objects.get(id=int(request.POST.get("book_id")))
    if len(request.POST.get("title")) > 0:
        current_book.title = request.POST.get("title")
    if len(request.POST.get("desc")) > 5:
        current_book.desc = request.POST.get("desc")
    current_book.save()
    return redirect("/books")

def delete_book(request, id):
    Book.objects.get(id=id).delete()
    return redirect("/books")

def add_favorite(request, id):
    current_user = get_user(request)
    current_book = Book.objects.get(id=id)
    current_user.books_favorited.add(current_book)
    current_user.save()
    return redirect("/books")

def remove_favorite(request, id):
    current_user = get_user(request)
    current_book = Book.objects.get(id=id)
    current_user.books_favorited.remove(current_book)
    current_user.save()
    return redirect("/books")