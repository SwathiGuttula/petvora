# === 1. Build React app using Node ===
FROM node:18 AS build

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project files
COPY . .

# Build the production-ready React app
RUN npm run build


# === 2. Serve the built files using nginx ===
FROM nginx:alpine

# Copy the build output (dist) from the previous stage to nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 inside the container
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
