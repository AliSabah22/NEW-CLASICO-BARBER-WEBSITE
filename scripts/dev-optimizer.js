#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting optimized development server...');

// Set environment variables for faster development
process.env.NODE_ENV = 'development';
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NEXT_SHARP_PATH = 'false';

// Create .env.local if it doesn't exist
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, `
# Development optimizations
NEXT_TELEMETRY_DISABLED=1
NEXT_SHARP_PATH=false
NODE_ENV=development
  `.trim());
}

// Start the development server with optimizations
const child = spawn('npx', ['next', 'dev', '--turbo'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development',
    NEXT_TELEMETRY_DISABLED: '1',
    NEXT_SHARP_PATH: 'false',
  }
});

child.on('error', (error) => {
  console.error('❌ Failed to start development server:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  console.log(`\n🛑 Development server stopped with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development server...');
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down development server...');
  child.kill('SIGTERM');
}); 