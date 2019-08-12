#!/usr/bin/env bash
# create virtual
python3 -m venv virtual
# activate virtual
source virtual/bin/activate
# stop server
pkill gunicorn
# pull code
git fetch --all
git reset --hard origin/master
# update requirements
pip install -r requirements.txt
# list apps
export apps=$(./manage.py shell -c "from django.conf import settings;print(' '.join(x for x in settings.INSTALLED_APPS if '.' not in x))")
# make migrations
python manage.py makemigrations $apps
# migrate
python manage.py migrate
# ls sttic || mkdir staic
ls static || mkdir static
# collectstatic
python manage.py collectstatic --no-input
# start api
bash start.sh &
# interface
cd resources/interface/
# npm install
npm install
# build
npm run build
# sleep for more info
sleep 10
