# Use an official Python runtime as a parent image
FROM ubuntu

RUN apt-get update
RUN apt-get -y install nodejs
RUN apt-get -y install npm
RUN npm -v
