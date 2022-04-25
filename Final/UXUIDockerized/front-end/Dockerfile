FROM node:14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .

# Load all modules needed
RUN apt update && apt upgrade -y && \
    apt install gcc g++ make python git libc6-dev build-essential libpng-dev \
    libjpeg-dev libvips-dev libvips musl-dev node-gyp pngquant webp -y

RUN yarn global add gatsby-cli

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/public .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]