# Use an official Python runtime as a parent image
FROM node:carbon
#nginx:1.12.2
#COPY . /usr/share/nginx/html
#RUN apt-get update
#RUN apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_6.x | bash - && apt-get install -y nodejs
RUN npm install --save-dev karma@2.0.0 karma-jasmine@1.1.1 karma-junit-reporter@1.2.0 jasmine-core@3.1.0 karma-chrome-launcher@2.2.0