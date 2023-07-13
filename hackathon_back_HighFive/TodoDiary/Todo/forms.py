from django import forms
from .models import MyTodo

class TodoForm(forms.ModelForm) :
    list = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': '오늘의 할 일은?'}))
    class Meta:
        model = MyTodo
        fields = ('list',)
