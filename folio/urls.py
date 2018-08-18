from django.conf.urls import url
from folio import views

urlpatterns = [
    url(r'^$',views.home,name='landing'),
]
