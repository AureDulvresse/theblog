from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.Blog.getPosts, name="getPosts"),
    path('categories/', views.Blog.getCategories, name="getCategories"),
    path('post/<int:id>', views.Blog.getPost, name="getPost"),
]