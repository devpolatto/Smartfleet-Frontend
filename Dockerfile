# ======================= Node ============================
FROM node:current-alpine3.17 AS builder

RUN mkdir /usr/app

ARG API=http://localhost:3333

COPY . /usr/app
WORKDIR /usr/app

RUN npm install

ENV VITE_API=${API}

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# ======================= Nginx ============================
RUN npm run build

FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder usr/app/dist .

EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]