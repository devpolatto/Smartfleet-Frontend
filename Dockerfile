FROM node:current-alpine3.17
WORKDIR /app-frontend
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]