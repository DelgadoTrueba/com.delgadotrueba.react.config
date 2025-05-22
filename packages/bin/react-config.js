#!/usr/bin/env node
const path = require('path');
const { spawn } = require('child_process');

const subcommand = process.argv[2];

const subcommandsMap = {
  webpack: path.join(__dirname, '../webpack/bin/index.js'),
};

if (!subcommandsMap[subcommand]) {
  console.error(`❌ Comando no reconocido: "${subcommand}"`);
  console.log('Comandos disponibles: webpack, tsconfig, jest');
  process.exit(1);
}

const args = process.argv.slice(3);

const child = spawn('node', [subcommandsMap[subcommand], ...args], {
  stdio: 'inherit',
});

child.on('exit', (code) => process.exit(code));
