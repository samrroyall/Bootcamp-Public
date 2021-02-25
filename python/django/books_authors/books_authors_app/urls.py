from django.urls import path
from . import views

urlpatterns = [
    path("", views.books),
    path("add_book", views.add_book),
    path("books/<int:id>", views.get_book),
    path("authors", views.authors),
    path("authors/<int:id>", views.get_author),
    path("add_author", views.add_author),
    path("add_link", views.add_link),
]
