# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import JsonResponse
from folio.serializers import SkillSerializer, ProjectSerializer, ContactSerializer, ProfileSerializer
from .models import Project, Skill, Contact, Profile


def skills_view(request):
    data = {
        "basicInfo": ProfileSerializer(Profile.objects.filter(active=True).first()).data,
        "skills": SkillSerializer(Skill.objects.filter(parent=None), many=True).data,
        "projects": ProjectSerializer(Project.objects, many=True).data,
        "contacts": ContactSerializer(Contact.objects, many=True).data,
    }
    return JsonResponse(data)
