FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for both client and server
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies for both client and server
RUN npm install
RUN cd client && npm install
RUN cd server && npm install

# Copy the rest of the application code
COPY . .

# Copy the .env files
COPY server/.env ./server/.env
COPY client/.env ./client/.env

# Build the client
RUN cd client && npm run build

# Expose the port the app runs on
EXPOSE 5000

# Start the server
CMD ["npm", "run", "start-server"]