# Use an official Python runtime as a parent image
FROM nginx:1.12.2
COPY . /usr/share/nginx/html
RUN apt-get update && apt-get install -y nodejs@8.11.1


