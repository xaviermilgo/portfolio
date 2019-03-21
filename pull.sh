# stop server
pkill gunicorn
# pull code
git pull origin master
# start server
bash start.sh &
