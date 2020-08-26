from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class book(models.Model):
    genreChoices = (
        ("Fantasy", "Fantasy"),
        ("Horror", "Horror"),
        ("Humor", "Humor"),
        ("Mystery", "Mystery"),
        ("Nonfiction", "Nonfiction"),
        ("Romance", "Romance"),
        ("Sci-fi", "Sci-fi"),
        ("Thriller", "Thriller")
    )
    bookID = models.AutoField(primary_key=True)
    title = models.CharField(max_length = 150, default='', unique=True)
    title2 = models.CharField(max_length = 150, default='', blank=True)
    author = models.CharField(max_length = 150, default='', blank=True)
    language = models.CharField(max_length = 50, default='', blank=True)
    ISBN = models.CharField(max_length = 150, default='', blank=True)
    wordCount = models.IntegerField(null=True, blank=True)
    bookType = models.CharField(max_length = 50, default='', blank=True)
    genre = models.CharField(max_length = 10, choices=genreChoices, default='', blank=True)
    summary = models.TextField(default='', blank=True)
    chapters = models.IntegerField(null=True, blank=True)

    def __int__(self) :
        return self.bookID

class bookList(models.Model):
    statusChoices = (
        ("Reading", "Reading"),
        ("Completed", "Completed"),
        ("On-Hold", "On-Hold"),
        ("Dropped", "Dropped"),
        ("Plan to Read", "Plan to Read")
    )
    bookListID = models.AutoField(primary_key=True)
    owner = models.ForeignKey(User, related_name="booklist", on_delete=models.CASCADE)
    bookTitle = models.ForeignKey('book', to_field='title', on_delete=models.CASCADE, null=True)
    bookRating = models.IntegerField(blank=True, null=True)
    status = models.CharField(max_length=12, choices=statusChoices, default='Reading')
    chaptersRead = models.IntegerField(null=True, blank=True)

    def __int__(self) :
        return self.bookListID
