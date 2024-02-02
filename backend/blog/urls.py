from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.Blog.getPosts, name="getPosts"),
    path('categories/', views.Blog.getCategories, name="getCategories"),
    path('categories/<int:category_id>', views.Blog.getPostCategory, name="getPostCategory"),
    path('post/categories/<str:category>', views.Blog.filterByCategory, name="filterByCategory"),
    path('post/<int:id>', views.Blog.getPost, name="getPost"),
]