from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class CreateUserView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class CreateTokenView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]