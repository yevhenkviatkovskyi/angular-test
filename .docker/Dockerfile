FROM node:18-alpine3.19

ENV SERVICE_ENV="local"

RUN npm install -g @angular/cli

COPY .docker/docker-entrypoint.sh /usr/local/bin/docker-node-entrypoint
RUN chmod +x /usr/local/bin/docker-node-entrypoint

WORKDIR /app

EXPOSE 4200

ENTRYPOINT ["docker-node-entrypoint"]
