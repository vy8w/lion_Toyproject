# Generated by Django 4.2.3 on 2023-07-11 18:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Todo', '0003_delete_mydiary'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mytodo',
            old_name='delete',
            new_name='remove',
        ),
    ]
