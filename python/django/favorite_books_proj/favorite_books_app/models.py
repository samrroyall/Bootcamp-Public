from django.db import models
from login_app.models import User

class BookManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData.get("title")) == 0:
            errors["title"] = "Title field is required."
        if len(postData.get("desc")) < 5:
            errors["desc"] = "Description field must be at least 5 characters long."
        return errors

class Book(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    uploaded_by = models.ForeignKey(User, related_name="books_uploaded", on_delete=models.CASCADE) 
    favorited_by = models.ManyToManyField(User, related_name="books_favorited")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()
