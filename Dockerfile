# Dockerfile for Node.js App

FROM node:16

# Set environment to production
ENV NODE_ENV=production

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY ["package.json", "package-lock.json*", "./"]

# Install the dependencies
RUN npm install --production

# Copy the entire project into the container
COPY . .

# Expose port 8080 for the application
EXPOSE 8080

# Set the command to run the application
CMD [ "node", "index.js" ]
