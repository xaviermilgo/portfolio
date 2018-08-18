# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Project, Skill
from django.shortcuts import render

# Create your views here.

def home(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    return render(request,'home.html',locals())
