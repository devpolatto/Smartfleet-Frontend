FROM node:18-alpine
WORKDIR /app 
COPY . /app
COPY package*.json ./
RUN npm install serve -g
RUN npm install
EXPOSE 3000
CMD [ " npm" , "run" , "dev" ]
