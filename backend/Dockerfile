FROM node:14.1-alpine

WORKDIR /back

COPY package*.json yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 8080

CMD [ "yarn", "start" ] 
