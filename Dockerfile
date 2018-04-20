# Use an official Python runtime as a parent image
#FROM node:carbon
#nginx:1.12.2
#COPY . /usr/share/nginx/html
#RUN apt-get update
#RUN apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install -y nodejs
#COPY . /app
#WORKDIR /app
#RUN apt-get update && npm install && npm install --only=dev
#RUN npm install -g karma@2.0.0 karma-jasmine@1.1.1 karma-juniFROM selenium/hub

FROM selenium/hub

COPY . /app
WORKDIR /app

RUN apt-get update && apt-get install nodejs npm
RUN npm install && npm install --only=dev