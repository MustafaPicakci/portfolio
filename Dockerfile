# build stage
FROM node:14-slim
WORKDIR /vue-app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 8080
CMD node portfolio-app.js
