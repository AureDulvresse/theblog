from rest_framework.serializers import ModelSerializer

from .models import Post, Category

class PostSerializers(ModelSerializer):
    
    class Meta:
        model = Post
        fields = "__all__"

class CategorySerializers(ModelSerializer):
    
    class Meta:
        model = Category
        fields = "__all__"