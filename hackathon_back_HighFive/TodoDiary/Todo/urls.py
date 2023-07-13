from django.urls import path
from . import views


urlpatterns = [
    path('', views.todo_calender, name='todo_calender'),
    path('todo_diary/', views.todo_diary, name='todo_diary'),
    path('todo_post/', views.todo_post, name='todo_post'),
    path('<int:pk>/edit/', views.todo_edit, name='todo_edit'),
    path('remove/<int:pk>/', views.todo_remove, name='todo_remove'),
    path('complete/<int:pk>/', views.todo_complete, name='todo_complete'),
    path('auto_delete/', views.auto_delete, name='auto_delete'),
]