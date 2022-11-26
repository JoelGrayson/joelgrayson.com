# Support for many frameworks
FROM ubuntu
RUN apt-get update -y
RUN apt-get upgrade -y

# <Install Node & NPM
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt-get install -y nodejs

# Fixing NPM to work
RUN npm i -g npm@latest
RUN npm i -g node-gyp
# />

WORKDIR /home/app
COPY . ./

RUN npm i
# Makes sure node is running in production mode
RUN export NODE_ENV=production

EXPOSE 8080
# RUN cd dist
CMD ["npm", "start"]
