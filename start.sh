#!/bin/bash
cd /opt/portfolio

# activate virtual
source virtual/bin/activate
# start server
gunicorn portfolio.wsgi --workers 4
