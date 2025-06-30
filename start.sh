#!/bin/bash

# Set environment variables for production
export NODE_ENV=production
export PORT=${PORT:-3000}

# Start the Next.js application
echo "Starting Clasico Barbershop on port $PORT"
yarn start 