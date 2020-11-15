
# Stage 1 - Builder
FROM node:12-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 - Runtime
FROM nginx:1.19-alpine

COPY nginx-default.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /app/public /usr/share/nginx/html
