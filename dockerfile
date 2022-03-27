FROM node:current-alpine

RUN mkdir -p /app
COPY . /app
WORKDIR /app

RUN yarn && yarn run build && yarn cache clean
CMD [ "npm", "start" ]

EXPOSE 3000
