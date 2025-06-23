#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Optimizing development environment...');

// Clean up directories
const dirsToClean = [
  '.next',
  'node_modules/.cache',
  '.turbo',
  'dist',
  'build',
  'node_modules/.postcss',
  'node_modules/.tailwindcss'
];

dirsToClean.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`🧹 Cleaning ${dir}...`);
    execSync(`rm -rf ${dir}`, { stdio: 'inherit' });
  }
});

// Clean up any PostCSS cache files
const postcssCacheDirs = [
  'node_modules/.cache/postcss',
  'node_modules/.cache/tailwindcss',
  'node_modules/.cache/autoprefixer'
];

postcssCacheDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`🧹 Cleaning PostCSS cache: ${dir}...`);
    execSync(`rm -rf ${dir}`, { stdio: 'inherit' });
  }
});

// Set development environment variables
process.env.NODE_ENV = 'development';
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NEXT_SHARP_PATH = '0';
process.env.NEXT_DISABLE_SOURCEMAPS = 'true';
process.env.NEXT_DISABLE_ESLINT = 'true';
process.env.NEXT_DISABLE_TYPESCRIPT = 'true';

// Set PostCSS-specific optimizations
process.env.POSTCSS_DISABLE_WARNINGS = '1';
process.env.TAILWIND_DISABLE_WARNINGS = '1';

console.log('✅ Development environment optimized!');
console.log('💡 Use "npm run dev:safe" for the most stable development experience');
console.log('💡 Use "npm run dev:ultra" for the fastest development experience (may have occasional timeouts)'); 