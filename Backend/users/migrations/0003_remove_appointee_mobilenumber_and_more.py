# Generated by Django 4.0.1 on 2022-01-05 08:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_appointee_mobilenumber_employee_designation_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointee',
            name='mobilenumber',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='designation',
        ),
    ]
