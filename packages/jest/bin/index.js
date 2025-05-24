#!/usr/bin/env node
const path = require('path');
const { spawn } = require('child_process');

// Obtener archivo de configuración desde argumentos o usar uno por defecto
const args = process.argv.slice(2);

const jestPath = require.resolve('jest/bin/jest');

const child = spawn('node', [jestPath, ...args], {
  stdio: 'inherit',
});

child.on('exit', process.exit);
