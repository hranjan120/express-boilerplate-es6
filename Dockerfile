FROM node:21.6.2-alpine3.19
WORKDIR /app/express-app-es6
RUN npm install -g nodemon
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]