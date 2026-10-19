const fs = require('node:fs');
const path = require('node:path');

const outputDir = path.resolve('dist-build/src');
const entryFile = path.join(outputDir, 'main.js');
const functionDir = path.resolve('api');
const functionFile = path.join(functionDir, 'index.js');

if (!fs.existsSync(entryFile)) {
  throw new Error(`Nest build output not found: ${entryFile}`);
}

fs.mkdirSync(functionDir, { recursive: true });
fs.copyFileSync(entryFile, functionFile);

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const dependencyNames = [
  '@nestjs/common',
  '@nestjs/config',
  '@nestjs/core',
  '@nestjs/platform-express',
  '@nestjs/throttler',
  '@prisma/adapter-pg',
  '@prisma/client',
  'jose',
  'pg',
  'reflect-metadata',
  'rxjs',
  'zod',
];
const runtimeDependencies = Object.fromEntries(
  dependencyNames.map((name) => [name, packageJson.dependencies[name]]),
);

fs.writeFileSync(
  path.join(functionDir, 'package.json'),
  JSON.stringify({ private: true, type: 'commonjs', dependencies: runtimeDependencies }, null, 2),
);
