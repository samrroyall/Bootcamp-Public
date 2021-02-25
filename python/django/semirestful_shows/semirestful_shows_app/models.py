from django.db import models
from datetime import date

class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        # all fields but `description` are required
        fields = ["title", "network", "release_date"]
        for field in fields:
            if len(postData.get(field)) == 0:
                errors[field] = f"{field.replace('_', ' ').title()} field is required."
        if len(errors) > 0:
            return errors
        # once all fields have been specified,
        # check each one for correctness
        if len(postData.get("title")) < 2: 
            errors["title"] = "Title field must contain at least 2 characters."
        if len(postData.get("network")) < 3:
            errors["network"] = "Network field must contian at least 3 characters."
        if len(postData.get("desc")) > 0 and len(postData.get("desc")) < 10:
            errors["desc"] = "Description field is specified, it must contain at least 10 characters."
        release_date = date.fromisoformat(postData.get("release_date"))
        if release_date >= date.today():
            errors["release_date"] = "Release Date field specified must be in the past."
        # if there are no other issues with the 'title' field
        # and our post request comes from the 'edit' form
        # ensure that new value for 'title' is unique
        if postData.get("which_form") == "edit" and "title" not in errors:
            current_titles = [s.title.lower() for s in self.all()]
            if postData.get("title").lower() in current_titles:
                errors["title"] = "Title field must be unique." 

        return errors

class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    release_date = models.DateField()
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()
