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
const bootstrapBundle = fs.readFileSync(entryFile, 'utf8').replace('void bootstrap();', '').replace('async function bootstrap()', 'async function bootstrap()').concat('\nmodule.exports = { bootstrap };\n');
fs.writeFileSync(functionFile, bootstrapBundle);

const handler = `const { bootstrap } = require('../dist-build/src/main');\n\nlet bootstrapPromise;\nlet serverPromise;\n\nmodule.exports = async (request, response) => {\n  try {\n    bootstrapPromise ??= bootstrap();\n    const app = await bootstrapPromise;\n    serverPromise ??= app.getHttpAdapter().getInstance().listen(0, '127.0.0.1');\n    const server = await serverPromise;\n    const address = server.address();\n    const target = new URL(request.url, 'http://127.0.0.1');\n    target.port = String(address.port);\n    const headers = { ...request.headers };\n    delete headers.host;\n    const upstream = await fetch(target, { method: request.method, headers, body: ['GET', 'HEAD'].includes(request.method) ? undefined : request, duplex: 'half' });\n    response.statusCode = upstream.status;\n    upstream.headers.forEach((value, key) => { if (key.toLowerCase() !== 'transfer-encoding') response.setHeader(key, value); });\n    response.end(Buffer.from(await upstream.arrayBuffer()));\n  } catch (error) {\n    console.error('Nest Vercel handler failed', error);\n    if (!response.headersSent) response.statusCode = 500;\n    response.end(JSON.stringify({ statusCode: 500, message: 'Internal server error' }));\n  }\n};\n`;
fs.writeFileSync(path.join(functionDir, 'handler.js'), handler);

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
