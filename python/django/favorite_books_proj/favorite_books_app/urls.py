from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('books', views.books),
    path('book/<int:id>', views.get_book),
    path('add_book', views.add_book),
    path('update_book', views.update_book),
    path('delete_book/<int:id>', views.delete_book),
    path('add_favorite/<int:id>', views.add_favorite),
    path('remove_favorite/<int:id>', views.remove_favorite),
]