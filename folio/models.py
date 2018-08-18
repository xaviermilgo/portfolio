# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Project(models.Model):
    title=models.TextField()
    description=models.TextField()
    link=models.TextField()
    image=models.ImageField(default='project.png', upload_to='projects')
    imagephone=models.ImageField(upload_to='phoneprojects')
    skill=models.ForeignKey('Skill', blank=True, null=True)

    def __str__(self):
        return self.title


class Skill(models.Model):
    name=models.TextField()
    img=models.ImageField()

    def __str__(self):
        return self.name