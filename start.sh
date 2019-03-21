# list apps
export apps=$(./manage.py shell -c "from django.conf import settings;print(' '.join(x for x in settings.INSTALLED_APPS if '.' not in x))")
# make migrations
python manage.py makemigrations $apps
# migrate
python manage.py migrate
# start server
gunicorn portfolio.wsgi --workers 4
