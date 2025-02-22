FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm i
RUN echo "💻 Building image"
RUN pwd
RUN ls ..
COPY . .
CMD ["npm", "run", "dev"]