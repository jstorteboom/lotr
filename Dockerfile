FROM nginx:latest
ARG project

COPY ./dist/apps/${project} /usr/share/nginx/html
