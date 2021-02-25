from django.db import models
from login.models import User
import datetime

class Message(models.Model):
    user_id = models.ForeignKey(User, related_name="messages", on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def age(self):
        now = datetime.datetime.now(datetime.timezone.utc)
        return (now - self.created_at).seconds/60

class Comment(models.Model):
    user_id = models.ForeignKey(User, related_name="comments", on_delete=models.CASCADE)
    message_id = models.ForeignKey(Message, related_name="comments", on_delete=models.CASCADE)
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

