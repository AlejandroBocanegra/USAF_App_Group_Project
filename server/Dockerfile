FROM postgres:latest

ENV POSTGRES_USER usaf_user

ENV POSTGRES_PASSWORD usafisthebest

ENV POSTGRES_DB usaf_app_group_project

COPY seed.sql /docker-entrypoint-initdb.d/seed.sql

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

EXPOSE 5432
