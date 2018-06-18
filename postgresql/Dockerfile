FROM postgres:9.6

# By copying it to below directory, init.sql runs each time the postgres container is started.
COPY init.sql /docker-entrypoint-initdb.d