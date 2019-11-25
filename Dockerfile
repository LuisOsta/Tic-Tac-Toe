FROM node:12.2.0-alpine


ENV PATH /app/node_modules/.bin:$PATH

RUN npm install