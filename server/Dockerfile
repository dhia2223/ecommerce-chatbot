# Use a Node.js image with version >=18
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire application
COPY . .

# Expose the port where the app will run
EXPOSE 3000

# Run the NestJS app
CMD ["npm", "run", "start:dev"]
