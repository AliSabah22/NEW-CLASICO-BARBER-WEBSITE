#!/bin/bash

echo "🚀 Starting Clasico Barbershop..."

# Kill any existing processes
pkill -f "next dev" 2>/dev/null || true

# Clear cache
rm -rf .next 2>/dev/null || true

# Start server
npm run dev 