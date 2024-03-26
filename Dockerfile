FROM node:iron-buster-slim

COPY package.json tsconfig.json yarn.lock koa-app/

COPY src koa-app/src

WORKDIR /koa-app

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]