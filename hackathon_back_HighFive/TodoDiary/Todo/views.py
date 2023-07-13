from django.shortcuts import render, redirect, get_object_or_404
from .models import MyTodo
from .forms import TodoForm
from django.utils import timezone

# Create your views here.
def todo_calender(request):
    return render(request, 'Todo/todo_calender.html')

def todo_diary(request):

    auto_delete()

    todos = MyTodo.objects.filter(remove=False)
    form = TodoForm()
    return render(request, 'Todo/todo_diary.html', {'form': form, 'todos': todos})


def todo_post(request):
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('todo_diary')
    else:
        form = TodoForm()

    todos = MyTodo.objects.all()

    return render(request, 'Todo/todo_diary.html', {'form': form, 'todos': todos})

def todo_edit(request, pk):
    todo = MyTodo.objects.get(id=pk)
    if request.method == "POST":
        form = TodoForm(request.POST, instance=todo)
        if form.is_valid():
            todo = form.save(commit=False)
            todo.save()
            return redirect('todo_diary')
    else:
        form = TodoForm(instance=todo)
    return render(request, 'Todo/todo_diary.html', {'form': form, 'todo': todo})


def todo_complete(request, pk):
    todo = MyTodo.objects.get(id=pk)
    todo.complete = True
    todo.save()
    return redirect('todo_diary')

def todo_remove(request, pk):
    todo = MyTodo.objects.get(id=pk)
    todo.remove = False
    todo.delete()
    return redirect('todo_diary')

def auto_delete():
    today = timezone.now().date()
    MyTodo.objects.filter(created__lt=today).delete()




