FROM node:8-alpine

RUN apk update
RUN apk add curl

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY *.json ./
RUN npm install --production

COPY public public
COPY src src
COPY LICENSE .
COPY README.md .

EXPOSE 3000

HEALTHCHECK CMD curl -f http://localhost:3000 || exit 1

CMD ["npm", "start"]
