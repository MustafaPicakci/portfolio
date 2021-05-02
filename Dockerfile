# build stage
FROM node:lts-alpine
WORKDIR /vue-app
COPY . .
RUN npm install
RUN npm install -g live-server
RUN npm run build
EXPOSE 8080
CMD live-server dist
