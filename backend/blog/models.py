from django.db import models

from account.models import User


# Create your models here.
class Category(models.Model):

    name = models.CharField(max_length = 30)
    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        verbose_name = "Categorie"

    def __str__(self) -> str:
        return self.name
    

class Tag(models.Model):

    name = models.CharField(max_length = 30)
    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        verbose_name = "Etiquette"

    def __str__(self) -> str:
        return self.name
    
class Post(models.Model):

    title = models.CharField(max_length = 60, unique = True)
    slug = models.CharField(max_length = 255, unique = True)
    content = models.TextField(blank = True)
    excerpt = models.CharField(max_length = 255)
    thumbnail = models.CharField(max_length = 255, default = 'post.jpg')
    category_id = models.ForeignKey(Category, null = True, on_delete = models.SET_NULL)
    nb_likes = models.IntegerField()
    likes =  models.ManyToManyField(User, through="PostLikes")
    tags = models.ManyToManyField(Tag, through="PostTag")
    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        verbose_name = "Article"

    def __str__(self) -> str:
        return self.title
    
class Comment(models.Model):
    content = models.CharField(max_length = 200)
    comment_by = models.ForeignKey(User, on_delete = models.CASCADE)
    post = models.ForeignKey(Post, on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    class Meta:
        verbose_name = "Commentaire"

class PostTag(models.Model):
    post_id = models.ForeignKey(Post, on_delete = models.CASCADE)
    tag_id = models.ForeignKey(Tag, on_delete = models.CASCADE)

    class Meta:
        verbose_name = "Etiquette par article"

    
class PostLikes(models.Model):
    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
    post_id= models.ForeignKey(Post, on_delete = models.CASCADE)

    class Meta:
        verbose_name = "Likes par Article"