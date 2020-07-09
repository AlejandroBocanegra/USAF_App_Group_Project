FROM node:8.10-alpine

RUN mkdir -p /back-end

WORKDIR /back-end

COPY . /back-end

RUN npm install

EXPOSE 9001

CMD [ "node", "index.js"]