FROM node:14.1-alpine

WORKDIR /back

COPY package*.json ./

RUN yarn

# ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

EXPOSE 8080

# CMD [ "node", "server.js" ]