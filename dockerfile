FROM node:22-alpine3.18

WORKDIR /src

COPY . .

ARG BASE_URL
ARG CONTAINER_NAME
ARG NETWORK
ARG PORT

RUN npm install

EXPOSE 3000

RUN npm run build
CMD ["node", ".output/server/index.mjs"]