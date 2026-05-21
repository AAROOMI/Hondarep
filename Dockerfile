# Base image
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Production image
FROM node:22-alpine

WORKDIR /app

# Install a simple horizontal server
RUN npm install -g serve

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Expose port (AI Studio uses 3000, but for generic docker use 3000 default)
EXPOSE 3000

# Start command
CMD ["serve", "-s", "dist", "-l", "3000"]
