FROM node:16.15.1 
WORKDIR /app
COPY . /app
ENV HOST=194.140.199.108
ENV USER=root
ENV PASSWORD=Mendocitaa*
ENV DATABASE=prayside
ENV DB_PORT=3308
ENV PORT=4005

RUN npm install

COPY . .

EXPOSE 4005

CMD [ "node", "app.js" ]
