FROM node:14

EXPOSE 3000
WORKDIR /app

COPY . . 

RUN npm i

CMD npm run dev