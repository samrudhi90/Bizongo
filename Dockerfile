FROM node:12.5.0

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm","start"]