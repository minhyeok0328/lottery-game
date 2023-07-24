FROM node:20.3.0

WORKDIR /usr/src/lottery-game

COPY . .

EXPOSE 8080

CMD [ "npm", "start:dev" ]
