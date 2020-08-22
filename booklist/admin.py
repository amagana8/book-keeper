from django.contrib import admin
from .models import book, bookList
# Register your models here.

class bookAdmin(admin.ModelAdmin):
    list_display = ('bookID', 'title', 'title2', 'author', 'language', 'ISBN', 'wordCount', 'bookType', 'genre', 'summary', 'chapters')

class bookListAdmin(admin.ModelAdmin):
    list_display = ('bookListID', 'owner', 'bookID', 'bookRating', 'chaptersRead')

admin.site.register(book, bookAdmin)
admin.site.register(bookList, bookListAdmin)