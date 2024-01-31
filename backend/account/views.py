from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
class Account:

    def index(request):

        data = [
            {
                'name': 'John'
            }]

        return JsonResponse(data, safe=False)