# Use the official Node.js 14 LTS image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies and nodemon
RUN npm install && npm install -g nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port Next.js will run on
EXPOSE 3000

# Start the development server with nodemon
CMD ["nodemon", "--watch", ".", "--exec", "npm run dev"]
