FROM node:16.15.1 
WORKDIR /app
COPY . /app
RUN npm install

COPY . .
RUN npm run build 

EXPOSE 4005

CMD [ "node", "app.js" ]
