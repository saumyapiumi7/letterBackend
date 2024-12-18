# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 5000

# Command to start the server
CMD ["node", "index.js"]
