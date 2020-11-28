#!/usr/bin/env bash
git pull
# interface
cd resources/interface/
# npm install
npm install
# build
npm run build
# sleep for more info
sleep 10
