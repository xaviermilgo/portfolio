# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Project, Skill, Visit, Contact, Profile
from django.contrib import admin

# Register your models here.
admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(Visit)
admin.site.register(Contact)
admin.site.register(Profile)

