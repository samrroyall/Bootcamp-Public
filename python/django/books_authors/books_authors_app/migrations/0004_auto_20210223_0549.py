# Generated by Django 2.2.4 on 2021-02-23 05:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors_app', '0003_author_notes'),
    ]

    operations = [
        migrations.RenameField(
            model_name='author',
            old_name='book_id',
            new_name='books',
        ),
    ]
