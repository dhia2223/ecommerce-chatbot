 
# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Install nodemon for dev
RUN npm install -g nodemon

# Run server in dev mode
CMD ["nodemon", "src/main.ts"]
