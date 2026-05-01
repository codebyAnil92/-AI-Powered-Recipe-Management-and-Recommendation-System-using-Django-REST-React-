from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import get_user_model

User = get_user_model()

@api_view(['POST'])
def create_user(request):
    email = request.data['email']
    password = request.data['password']

    user = User.objects.create_user(
        username=email,
        email=email,
        password=password
    )

    return Response({"message": "User created"})