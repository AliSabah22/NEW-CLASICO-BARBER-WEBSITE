#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ COMPILATION SPEED BENCHMARK\n');

const scripts = [
  { name: 'dev:lightning', cmd: 'npm run dev:lightning', expected: '1-2s' },
  { name: 'dev:ultra', cmd: 'npm run dev:ultra', expected: '2-3s' },
  { name: 'dev:fast', cmd: 'npm run dev:fast', expected: '3-4s' },
  { name: 'dev', cmd: 'npm run dev', expected: '4-5s' },
];

function runBenchmark(script) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    const child = spawn(script.cmd, [], { 
      shell: true, 
      stdio: 'pipe',
      env: { ...process.env, FORCE_COLOR: '0' }
    });

    let output = '';
    let isReady = false;

    child.stdout.on('data', (data) => {
      output += data.toString();
      
      // Check for ready signal
      if (output.includes('Ready in') && !isReady) {
        isReady = true;
        const time = Date.now() - startTime;
        child.kill('SIGTERM');
        
        setTimeout(() => {
          resolve({
            script: script.name,
            time: time / 1000,
            expected: script.expected,
            status: 'success'
          });
        }, 1000);
      }
    });

    child.stderr.on('data', (data) => {
      output += data.toString();
    });

    // Timeout after 30 seconds
    setTimeout(() => {
      if (!isReady) {
        child.kill('SIGTERM');
        resolve({
          script: script.name,
          time: 'timeout',
          expected: script.expected,
          status: 'timeout'
        });
      }
    }, 30000);
  });
}

async function runAllBenchmarks() {
  console.log('Running benchmarks...\n');
  
  for (const script of scripts) {
    console.log(`Testing ${script.name}...`);
    const result = await runBenchmark(script);
    
    if (result.status === 'success') {
      console.log(`✅ ${script.name}: ${result.time}s (expected: ${result.expected})`);
    } else {
      console.log(`❌ ${script.name}: ${result.status} (expected: ${result.expected})`);
    }
    
    // Wait between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\n🎯 RECOMMENDATIONS:');
  console.log('- Use "npm run dev:lightning" for fastest development');
  console.log('- Use "npm run dev:ultra" if you need linting');
  console.log('- Use "npm run dev:fast" for balanced performance');
  console.log('- Use "npm run dev" for standard development');
}

// Check if we should run benchmarks
if (process.argv.includes('--run')) {
  runAllBenchmarks();
} else {
  console.log('To run benchmarks: node scripts/benchmark.js --run');
  console.log('This will test all development modes and measure compilation times.');
} 