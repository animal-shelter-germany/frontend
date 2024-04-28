FROM node:22-alpine3.18

WORKDIR /src

COPY . .

RUN npm install

RUN npm run build
CMD ["node", ".output/server/index.mjs"]