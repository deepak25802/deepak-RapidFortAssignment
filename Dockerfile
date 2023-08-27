FROM node:slim

RUN mkdir -p /usr/src/RapidFortApp

WORKDIR /usr/src/RapidFortApp

COPY ./src .

RUN npm install

CMD [ "node", "index.js" ]

EXPOSE 5050