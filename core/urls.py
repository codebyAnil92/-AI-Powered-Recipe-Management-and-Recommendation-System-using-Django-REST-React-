from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.shortcuts import redirect

from rest_framework.permissions import AllowAny
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


# 👉 Swagger Configuration
schema_view = get_schema_view(
    openapi.Info(
        title="Recipe API",
        default_version='v1',
        description="API documentation for Recipe App",
    ),
    public=True,
    permission_classes=(AllowAny,),
)


# 👉 Home View (choose ONE)

# Option 1: Simple text
def home(request):
    return HttpResponse("API is running 🚀")


# Option 2 (Better UX): redirect to Swagger
# def home(request):
#     return redirect('/swagger/')


# 👉 URL Patterns
urlpatterns = [
    path('', home),  # 👈 root URL

    path('admin/', admin.site.urls),

    path('api/user/', include('user.urls')),
    path('api/recipe/', include('recipe.urls')),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0)),
]