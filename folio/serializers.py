from rest_framework import serializers

from folio.models import Skill, Project, Contact, Profile


class SkillSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    def get_children(self, skill):
        return SkillSerializer(skill.children.all(), many=True).data

    class Meta:
        model = Skill
        fields = ('name', 'type', 'img', 'children_type', 'children')


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        exclude = ('active', )


class ContactSerializer(serializers.ModelSerializer):
    icon = serializers.SerializerMethodField()

    def get_icon(self, skill):
        return [skill.icon_type, skill.icon]

    class Meta:
        model = Contact
        fields = ('type', 'text', 'url', 'icon')


class ProjectSerializer(serializers.ModelSerializer):
    skills = serializers.SerializerMethodField()

    def get_skills(self, project):
        def s(skill):
            return {
                "name": skill.name,
                "img": skill.img.url
            }
        return [s(sk) for sk in project.skills.all()]

    class Meta:
        model = Project
        fields = ('title', 'description', 'link', 'repo_link', 'image', 'image_phone', 'live', 'skills')
