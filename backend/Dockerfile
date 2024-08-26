from node:latest

WORKDIR /app/backend/

# Copy dependency definitions
COPY package.json /app/backend//
COPY package-lock.json /app/backend//

RUN npm install

COPY . /app/backend//

EXPOSE 5000

# start server
CMD ["npm","start"]


