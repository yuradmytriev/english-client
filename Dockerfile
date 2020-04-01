FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

CMD [ "npm", "start" ]
