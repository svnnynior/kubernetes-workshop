FROM node:10

WORKDIR /usr/src/multiple-apis-example

COPY package*.json ./
RUN npm install


COPY server.js ./

EXPOSE 3000
CMD ["node", "server.js"]