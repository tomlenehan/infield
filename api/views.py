from django.http import JsonResponse
from django.views import View
import json


class PayloadView(View):

    def post(self, request):
        push = json.loads(request.body.decode('utf-8'))
        print("I got some JSON: ", push)
        return JsonResponse({})

    def get(self, request):
        return JsonResponse({})

    def allowed_methods(self, request, *args, **kwargs):
        return ['post', 'get']