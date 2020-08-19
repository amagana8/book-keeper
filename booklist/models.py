from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class book(models.Model):
    bookID = models.IntegerField(primary_key=True)
    title = models.CharField(max_length = 150, default='')
    title2 = models.CharField(max_length = 150, default='', blank=True)
    author = models.CharField(max_length = 150, default='', blank=True)
    language = models.CharField(max_length = 50, default='', blank=True)
    ISBN = models.CharField(max_length = 150, default='', blank=True)
    wordCount = models.IntegerField(null=True, blank=True)
    bookType = models.CharField(max_length = 50, default='', blank=True)
    genre = models.CharField(max_length = 50, default='', blank=True)
    summary = models.CharField(max_length = 1000, default='', blank=True)
    chapters = models.IntegerField(null=True, blank=True)

    def __str__(self) :
        return self.title

class bookList(models.Model):
    bookListID = models.IntegerField(primary_key=True)
    userID = models.IntegerField()
    bookID = models.IntegerField()
    bookRating = models.IntegerField(blank=True)
    chaptersRead = models.IntegerField(blank=True)
    owner = models.ForeignKey(User, related_name="booklist", on_delete=models.CASCADE, null=True)

    def __str__(self) :
        return self.userID
