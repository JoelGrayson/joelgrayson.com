FROM ubuntu:22.04
# Ubuntu has support for many frameworks
# Breaks for ubuntu 23 when installing libasound2

MAINTAINER Joel Grayson


# Cron
RUN apt-get update && apt-get upgrade -y
# RUN apt-get install -y cron
# COPY crontab /etc/cron.d/joel-cron
# RUN chmod 644 /etc/cron.d/joel-cron
# RUN touch /var/log/cron.log


# Install Node & NPM
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash
# RUN apt install -y Node.js npm
RUN apt-get install -y nodejs
# Fixing NPM to work
RUN npm i -g npm@latest
RUN npm i -g node-gyp


# <EXCLUDED IN MacDockerFile>
# Install Google Chrome
RUN apt install chromium-browser -y
RUN apt update 
# Install Puppeteer
RUN npm install -g puppeteer --unsafe-perm=true -allow-root
RUN apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
# </EXCLUDED IN MacDockerFile>


WORKDIR /usr/src/app
COPY . .
ENV NODE_ENV=production
RUN npm install --omit=dev
# RUN /usr/bin/crontab crontab


EXPOSE 8080
CMD cron && npm start

