from django.db import models

import bcrypt
from datetime import date
import re

class UserManager(models.Manager):
    def lookup_user(self, email):
        user_objs = self.filter(email=email)
        return None if len(user_objs) == 0 else user_objs[0]

    def validate_password(self, user, password):
        return bcrypt.checkpw(password.encode(), user.password.encode())

    def validate_email(self, email):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        return EMAIL_REGEX.match(email)

    def login_validator(self, postData):
        errors = {}
        # ensure all fields are specified
        fields = ["email", "password"]
        for field in fields:
            if postData.get(field) == "":
                errors[field] = f"{field.title()} field is required."
        if len(errors) > 0: 
            return errors
        # check whether email is valid
        if not self.validate_email(postData.get("email")):
            return {"login": "Please enter a valid email address."}
        # and then look it up in the database
        # and check whether password matches email
        user_obj = self.lookup_user(postData.get("email"))
        if user_obj == None or not self.validate_password(user_obj, postData.get("password")):
            return {"login": "Incorrect email address or password."}

    def registration_validator(self, postData):
        errors = {}
        # ensure all fields are specified
        fields = ["first_name", "last_name", "birthdate", "email", "password", "confirm_password"]
        for field in fields:
            if postData.get(field) == "":
                errors[field] = f"{field.replace('_', ' ').title()} field is required."
        if len(errors) > 0: 
            return errors
        # ensure length requirements are met
        name_fields = ["first_name", "last_name"]
        for field in fields:
            if len(postData.get(field)) < 2:
                errors[field] = f"{field.replace('_', ' ').title()} field must be at least 2 characters long."
        # ensure email is valid
        # and if valid, ensure it is unique
        if not self.validate_email(postData.get("email")):
            errors["email"] = "Email field must be a valid email."
        elif self.lookup_user(postData.get("email")) != None:
            errors["email"] = "An account associated with that email already exists."
        # ensure birthdate is at least 13 years in the past
        today = date.today()
        max_birthdate = date(year=today.year-13, month=today.month, day=today.day)
        post_date = date.fromisoformat(postData.get("birthdate"))
        if post_date > max_birthdate:
            errors["birthdate"] = "Users must be at least 13 years old."
        # ensure passwords match and are both at least 8 characters
        if len(postData.get("password")) < 8:
            errors["password"] = "Password must be at least 8 characters long."
        elif len(postData.get("password")) != len(postData.get("confirm_password")):
            errors["password"] = "Passwords do not match."
        return errors

    def basic_validator(self, postData):
        form_name = postData.get("which_form")
        if form_name == "login":
            return self.login_validator(postData)
        elif form_name == "registration":
            return self.registration_validator(postData)
        else:
            raise Exception("Invalid form name supplied to User form validator.")

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=60)
    birthdate = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

