from django.shortcuts import render
from rest_framework import viewsets
from .serializers import bookSerializer, bookListSerializer
from .models import book, bookList
# Create your views here.

class bookView(viewsets.ModelViewSet):
    serializer_class = bookSerializer
    queryset = book.objects.all()

class bookListView(viewsets.ModelViewSet):
    serializer_class = bookListSerializer
    queryset = bookList.objects.all()
