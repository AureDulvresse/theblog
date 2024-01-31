from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

# Create your models here.
class MyUserManager(BaseUserManager):
    
    def create_user(self, email, frist_name, last_name, password = None):
        
        if not email:
            return ValueError("Une addresse mail est obligatoire")
        
        user = self.model(
            email = self.normalize_email(email),
            frist_name = frist_name,
            last_name = last_name,
        )

        user.set_password(password)
        user.save(using = self._db)
        
        return user
    
    def create_superuser(self, email, frist_name, last_name, password = None):

        user = self.create_user(
            email = email,
            password = password,
            frist_name = frist_name,
            last_name = last_name,
        )

        user.is_admin = True

        user.save(using = self._db)

        return user
    

class User(AbstractBaseUser):
    email = models.EmailField(
        max_length = 150,
        unique = True,
        verbose_name = "Adresse mail"
    )
    frist_name = models.CharField(max_length = 70)
    last_name = models.CharField(max_length = 70)
    is_active = models.BooleanField(default = True)
    is_admin = models.BooleanField(default = False)
    profile_picture = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add  = True)
    updated_at = models.DateTimeField(auto_now = True)

    objects = MyUserManager()

    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = [
        'frist_name',
        'last_name',
    ]

    class Meta:
        verbose_name = "Utilisateur"

    def __str__(self) -> str:
        return f"{self.frist_name} {self.last_name}"
    
    def has_perm(self, perm, obj = None):
        return True
    
    def has_module_perms(self, app_label):
        return True
    
    @property
    def is_staff(self):
        return self.is_admin
    
