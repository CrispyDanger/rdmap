# Generated by Django 4.1.7 on 2023-03-15 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scrum', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scrumboard',
            name='name',
            field=models.CharField(default='New ScrumBoard', max_length=20),
        ),
    ]