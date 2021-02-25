import datetime
from django.shortcuts import render, redirect
from login.models import User
from .models import Comment, Message

def get_user(request):
    return User.objects.get(email=request.session.get("userid"))

def index(request):
    if "userid" not in request.session:
        return redirect("/login")
    context = {
        "userid": request.session.get("userid"),
        "first_name": get_user(request).first_name,
        "all_messages": Message.objects.all().order_by("-created_at"),
    }
    return render(request, "wall.html", context)

def post_message(request):
    current_user = get_user(request)
    new_message = Message.objects.create(
        user_id = current_user,
        message = request.POST.get("message")
    )
    return redirect("/")

def delete_message(request):
    Message.objects.get(id=int(request.POST.get("message_id"))).delete()
    return redirect("/")

def post_comment(request):
    current_user = get_user(request)
    current_message = Message.objects.get(id=int(request.POST.get("message_id")))
    new_comment = Comment.objects.create(
        user_id = current_user,
        message_id = current_message,
        comment = request.POST.get("comment")
    )
    return redirect("/")
