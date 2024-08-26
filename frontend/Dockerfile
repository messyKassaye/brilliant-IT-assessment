# Create image based on the official Node image from dockerhub
FROM node:lts-buster AS development

# Create app directory
WORKDIR /app/frontend/

# Copy dependency definitions
COPY package.json /app/frontend/
COPY package-lock.json /app/frontend/

# Install dependecies
#RUN npm set progress=false \
#    && npm config set depth 0 \
#    && npm i install
RUN npm install

# Get all the code needed to run the app
COPY . /app/frontend/

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
