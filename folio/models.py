# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Project(models.Model):
    title = models.TextField()
    description = models.TextField()
    link = models.TextField(blank=True, null=True)
    repolink = models.TextField(default='#')
    image = models.ImageField(default='project.png', upload_to='projects')
    imagephone = models.ImageField(upload_to='phoneprojects')
    LIVE = models.BooleanField(default=False)
    skills = models.ManyToManyField('Skill', related_name='projects')

    def __str__(self):
        return self.title



class Skill(models.Model):
    options=[('Backend','Backend'),('Frontend','Frontend'),('InfoSec','InfoSec')]
    name = models.TextField()
    img = models.ImageField()
    type = models.TextField(choices=options)
    increment = -1

    def __str__(self):
        return self.name

    def rotate(self):
        Skill.increment += 1
        return str(Skill.increment*(360/Skill.objects.filter(type=self.type).count()))+'deg'

    def rot(self):
        return str(-Skill.increment*(360/Skill.objects.filter(type=self.type).count()))+'deg'


class Visit(models.Model):
    ip = models.TextField()
    isp = models.TextField()
    country = models.TextField()
    device = models.TextField()
    os = models.TextField()
    browser = models.TextField()
    city = models.TextField()
    referer = models.TextField()
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f'{self.ip} on {self.os} on {self.time.strftime("%Y-%m-%d %H:%M")}'
