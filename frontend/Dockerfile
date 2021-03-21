FROM node:14.1-alpine

WORKDIR /front

COPY package*.json  ./

RUN yarn

# ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]