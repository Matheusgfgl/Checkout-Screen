# Build stage
FROM node:12 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG ENVIRONMENT_BUILD
RUN npm run build -- --mode $ENVIRONMENT_BUILD

# Production stage
FROM nginx:1.16-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]