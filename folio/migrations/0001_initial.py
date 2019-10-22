# Generated by Django 2.2.4 on 2019-08-12 12:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.TextField()),
                ('icon_type', models.TextField(choices=[('fab', 'Brand Icons'), ('fas', 'Solid Icons'), ('far', 'Regular Icons'), ('fal', 'Light Icons')])),
                ('icon', models.TextField()),
                ('text', models.TextField()),
                ('url', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('title', models.TextField()),
                ('secondaryTitle', models.TextField()),
                ('backgroundImage', models.ImageField(upload_to='')),
                ('aboutMeHead', models.TextField()),
                ('aboutMeBody', models.TextField()),
                ('extraMd', models.TextField()),
                ('active', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('children_type', models.TextField(default='skills')),
                ('name', models.TextField()),
                ('img', models.ImageField(upload_to='')),
                ('type', models.TextField()),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='folio.Skill')),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('description', models.TextField()),
                ('link', models.TextField(blank=True, null=True)),
                ('repo_link', models.TextField(default='#')),
                ('image', models.ImageField(default='project.png', upload_to='projects')),
                ('image_phone', models.ImageField(upload_to='phoneprojects')),
                ('live', models.BooleanField(default=False)),
                ('skills', models.ManyToManyField(related_name='projects', to='folio.Skill')),
            ],
        ),
    ]