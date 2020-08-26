from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import bookSerializer, bookListSerializer
from .models import book, bookList
# Create your views here.

class bookView(viewsets.ModelViewSet):
    serializer_class = bookSerializer
    queryset = book.objects.all()

class bookListView(viewsets.ModelViewSet):
    serializer_class = bookListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.booklist.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)  
