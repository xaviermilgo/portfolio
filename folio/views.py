# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Project, Skill
from django.shortcuts import render

# Create your views here.

def home(request):
    projects = Project.objects.all()
    backend_skills = Skill.objects.filter(type='Backend').all()
    frontend_skills = Skill.objects.filter(type='Frontend').all()
    infosec_skills = Skill.objects.filter(type='InfoSec').all()
    return render(request,'home.html',locals())
