FROM node:8.10-alpine

RUN mkdir -p /front-end

WORKDIR /front-end

COPY . /front-end

RUN npm install

EXPOSE 9002

CMD [ "node", "server.js"]