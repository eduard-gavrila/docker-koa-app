FROM node:iron-buster-slim

COPY . koa-app/

WORKDIR /koa-app

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]