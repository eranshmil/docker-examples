FROM node:latest

WORKDIR /server

COPY package.json /server
RUN yarn install
COPY . /server

CMD ["yarn", "start"]
EXPOSE 3000