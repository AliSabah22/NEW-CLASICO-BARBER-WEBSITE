#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Starting Lightning Fast Development Server...');

// Set environment variables for maximum speed
process.env.NODE_ENV = 'development';
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NEXT_DISABLE_SOURCEMAPS = '1';
process.env.NEXT_DISABLE_ESLINT = '1';
process.env.NEXT_DISABLE_TYPESCRIPT = '1';

// Clear cache if it exists
const cacheDir = path.join(process.cwd(), '.next');
if (fs.existsSync(cacheDir)) {
  console.log('🧹 Clearing cache for fresh start...');
  fs.rmSync(cacheDir, { recursive: true, force: true });
}

// Start the development server with optimized flags
const child = spawn('npx', [
  'next',
  'dev',
  '--turbo',
  '--port',
  '3000'
], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_OPTIONS: '--max-old-space-size=4096'
  }
});

child.on('error', (error) => {
  console.error('❌ Error starting server:', error);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`🚪 Server closed with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down server...');
  child.kill('SIGTERM');
}); 