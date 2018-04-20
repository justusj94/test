# Use an official Python runtime as a parent image
#FROM node:carbon
#nginx:1.12.2
#COPY . /usr/share/nginx/html
#RUN apt-get update
#RUN apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install -y nodejs
#COPY . /app
#WORKDIR /app
#RUN apt-get update && npm install && npm install --only=dev
#RUN npm install -g karma@2.0.0 karma-jasmine@1.1.1 karma-junit

FROM selenium/hub

USER root

COPY . /app
WORKDIR /app

#RUN apt-get update && apt-get install -y nodejs npm

#RUN npm install --save-dev karma@2.0.0 karma-jasmine@1.1.1 karma-junit-reporter@1.2.0 jasmine-core@3.1.0 karma-phantomjs-launcher@1.0.4

RUN apt-get update && apt-get install -y curl && curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.9/install.sh | bash
RUN nvm install node && nvm use node
RUN npm install karma@2.0.0 karma-jasmine@1.1.1 karma-junit-reporter@1.2.0 jasmine-core@3.1.0 karma-phantomjs-launcher@1.0.4 --save-dev