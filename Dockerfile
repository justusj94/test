# Use an official Python runtime as a parent image
FROM nginx:1.12.2
COPY . /usr/share/nginx/html
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && apt-get install -y curl nodejs
RUN node -v
