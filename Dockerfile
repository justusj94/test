# Use an official Python runtime as a parent image
FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install nodejs
RUN npm -v
