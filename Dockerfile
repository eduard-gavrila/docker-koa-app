FROM node:iron-buster-slim

COPY .yarn koa-app/.yarn

COPY package.json tsconfig.json yarn.lock .yarnrc.yml koa-app/

WORKDIR /koa-app

RUN yarn

COPY src src

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]