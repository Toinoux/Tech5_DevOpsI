FROM node:14.1-alpine AS build-stage

WORKDIR /front

COPY package*.json yarn.lock ./

COPY . .

RUN yarn

CMD [ "yarn", "start" ]

# FROM nginxinc/nginx-unprivileged:1.16.1-alpine

# # Use root user to copy dist folder and modify user access to specific folder
# USER root

# # Copy application and custom NGINX configuration
# #COPY ./build /usr/share/nginx/html/
# #COPY /nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-stage /front/build /usr/share/nginx/html

# # Setup unprivileged user 1001
# RUN chown -R 1001 /usr/share/nginx/html/

# # Use user 1001
# USER 1001

# # Expose a port that is higher than 1024 due to unprivileged access
# EXPOSE 3000

# #CMD ["nginx", "-g", "daemon off;"]


# # # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# # FROM nginx:1.17

# # # WORKDIR /nginx

# # COPY --from=build-stage /front/build/ /usr/share/nginx/html
# # COPY --from=build-stage /front/nginx.conf /etc/nginx/conf.d/default.conf

# # RUN cat /etc/nginx/nginx.conf
# # RUN chown -R nginx:nginx /nginx && chmod -R 755 /nginx && \
# #   chown -R nginx:nginx /var/cache/nginx && \
# #   chown -R nginx:nginx /var/log/nginx && \
# #   chown -R nginx:nginx /etc/nginx/conf.d

# # RUN touch /var/run/nginx.pid && \
# #   chown -R nginx:nginx /var/run/nginx.pid

# # USER nginx