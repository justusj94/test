# Use an official Python runtime as a parent image
FROM ubuntu

RUN apt-get update
RUN apt-get install nodejs
RUN npm -v
