#node js image
FROM node:carbon

#copy branch to app
COPY . /app
WORKDIR /app

#run update install npm and needed packages
RUN apt-get update && npm install karma@2.0.0 karma-jasmine@1.1.1 karma-junit-reporter@1.2.0 jasmine-core@3.1.0 karma-phantomjs-launcher@1.0.4 selenium-webdriver@3.6.0 casperjs@1.1.4 --save-dev