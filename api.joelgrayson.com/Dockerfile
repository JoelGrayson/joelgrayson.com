# Support for many frameworks
FROM ubuntu

RUN apt-get update
RUN apt-get upgrade -y

# <Install Node & NPM
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install -y nodejs

# Fixing NPM to work
RUN npm i -g npm@latest
RUN npm i -g node-gyp
# />


# <Install Google Chrome for Puppeteer
RUN apt install -y wget
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt install -y ./google-chrome-stable_current_amd64.deb
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV CHROMIUM_PATH=/usr/bin/google-chrome-stable
# />


WORKDIR /home/app
COPY . ./

RUN npm i
# Makes sure node is running in production mode
RUN export NODE_ENV=production

EXPOSE 8080
CMD ["npm", "start"]

