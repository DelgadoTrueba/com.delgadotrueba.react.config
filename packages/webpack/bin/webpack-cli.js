#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

// Obtener archivo de configuración desde argumentos o usar uno por defecto
const userArgs = process.argv.slice(2);
const configPath = userArgs[0] && fs.existsSync(userArgs[0])
  ? path.resolve(userArgs[0])
  : path.resolve(__dirname, '../preset/webpack.config.js');

const webpackPath = require.resolve('webpack/bin/webpack.js');

const args = ['--config', configPath];

const child = spawn('node', [webpackPath, ...args], {
  stdio: 'inherit',
});

child.on('exit', process.exit);
