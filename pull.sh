# create virtual
python3 -m venv virtual
# activate virtual
source virtual/bin/activate
# stop server
pkill gunicorn
# pull code
git pull origin master
# update requirements
pip install -r requirements.txt
# list apps
export apps=$(./manage.py shell -c "from django.conf import settings;print(' '.join(x for x in settings.INSTALLED_APPS if '.' not in x))")
# make migrations
python manage.py makemigrations $apps
# migrate
python manage.py migrate
# start server
bash start.sh &
