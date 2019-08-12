from django.conf.urls import url
from folio import views

urlpatterns = [
    url(r'^api/$', views.skills_view, name='api_skills'),
]
