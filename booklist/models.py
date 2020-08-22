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
    summary = models.TextField(default='', blank=True)
    chapters = models.IntegerField(null=True, blank=True)

    def __int__(self) :
        return self.bookID

class bookList(models.Model):
    bookListID = models.IntegerField(primary_key=True)
    owner = models.ForeignKey(User, related_name="booklist", on_delete=models.CASCADE)
    bookID = models.ForeignKey('book', on_delete=models.CASCADE)
    bookRating = models.IntegerField(blank=True)
    chaptersRead = models.IntegerField(blank=True)

    def __int__(self) :
        return self.bookListID
