from django.urls import path
from .views import register_user, login_user, logout_user, get_current_user
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('logout/', logout_user, name='logout'),
    path('current-user/', get_current_user, name='current-user'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
