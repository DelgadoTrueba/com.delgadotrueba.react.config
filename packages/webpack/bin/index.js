#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

// Obtener archivo de configuración desde argumentos o usar uno por defecto
const args = process.argv.slice(2);

const webpackPath = require.resolve('webpack/bin/webpack.js');

const child = spawn('node', [webpackPath, ...args], {
  stdio: 'inherit',
});

child.on('exit', process.exit);
