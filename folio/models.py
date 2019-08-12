# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models


class Project(models.Model):
    title = models.TextField()
    description = models.TextField()
    link = models.TextField(blank=True, null=True)
    repo_link = models.TextField(default='#')
    image = models.ImageField(default='project.png', upload_to='projects')
    image_phone = models.ImageField(upload_to='phoneprojects')
    live = models.BooleanField(default=False)
    skills = models.ManyToManyField('Skill', related_name='projects')

    def __str__(self):
        return self.title


class Skill(models.Model):
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, null=True, blank=True)
    children_type = models.TextField(default='skills')
    name = models.TextField()
    img = models.ImageField()
    type = models.TextField()

    def __str__(self):
        return self.name


class Contact(models.Model):
    type = models.TextField()
    icon_type = models.TextField(choices=(
        ('fab', 'Brand Icons'),
        ('fas', 'Solid Icons'),
        ('far', 'Regular Icons'),
        ('fal', 'Light Icons'),
    ))
    icon = models.TextField()
    text = models.TextField()
    url = models.TextField()

    def __str__(self):
        return self.text


class Profile(models.Model):
    name = models.TextField()
    title = models.TextField()
    secondaryTitle = models.TextField()
    backgroundImage = models.ImageField()
    aboutMeHead = models.TextField()
    aboutMeBody = models.TextField()
    extraMd = models.TextField()
    active = models.BooleanField(default=False)
