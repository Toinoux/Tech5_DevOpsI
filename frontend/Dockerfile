FROM node:14.1-alpine AS build-stage

WORKDIR /front

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

CMD [ "yarn", "start" ]

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.17

# # WORKDIR /nginx

# COPY --from=build-stage /front/build/ /usr/share/nginx/html
# COPY --from=build-stage /front/nginx.conf /etc/nginx/conf.d/default.conf

# RUN cat /etc/nginx/nginx.conf
# RUN chown -R nginx:nginx /nginx && chmod -R 755 /nginx && \
#   chown -R nginx:nginx /var/cache/nginx && \
#   chown -R nginx:nginx /var/log/nginx && \
#   chown -R nginx:nginx /etc/nginx/conf.d

# RUN touch /var/run/nginx.pid && \
#   chown -R nginx:nginx /var/run/nginx.pid

# USER nginx