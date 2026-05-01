from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_home(request):
    return Response({
        "message": "Recipe API is working 🚀",
        "endpoints": {
            "recipes": "/api/recipes/",
            "auth": "/api/user/token/"
        }
    })