# Generated by Django 4.1.7 on 2023-03-09 18:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scrum', '0003_project_created_at_project_modified_at_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='scrum_board',
        ),
        migrations.AddField(
            model_name='scrumboard',
            name='project',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='scrumboards', to='scrum.project'),
            preserve_default=False,
        ),
    ]
