from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Post, Category
from .serializers import PostSerializers, CategorySerializers

# Create your views here.
class Blog:

    @api_view(['GET'])
    def getPosts(request):

        posts = Post.objects.all().order_by('-updated_at')
        
        serializer = PostSerializers(posts, many = True)

        return Response(serializer.data)
    
    @api_view(['GET'])
    def getPost(request, id):

        posts = Post.objects.get(pk = id)
        
        serializer = PostSerializers(posts, many = False)

        return Response(serializer.data)
    
    @api_view(['GET'])
    def getCategories(request):

        categories = Category.objects.all()

        serializer = CategorySerializers(categories, many = True)

        return Response(serializer.data)