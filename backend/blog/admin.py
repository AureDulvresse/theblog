from django.contrib import admin

from .models import Post, Comment, Category, Tag, PostLikes, PostTag

# Register your models here.

admin.site.register(Category)
admin.site.register(Tag)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(PostTag)
admin.site.register(PostLikes)