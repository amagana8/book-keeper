from rest_framework import serializers
from .models import book, bookList

class bookSerializer(serializers.ModelSerializer):
    class Meta:
        model = book
        fields = ['bookID', 'title', 'title2', 'author', 'language', 'ISBN', 'wordCount', 'bookType', 'genre', 'summary', 'chapters']

class bookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = bookList
        fields = ['bookListID', 'userID', 'bookID', 'bookRating', 'chaptersRead', 'owner']
