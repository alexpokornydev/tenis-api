const fs = require('node:fs');
const path = require('node:path');

const outputDir = path.resolve('dist-build/src');
const entryFile = path.join(outputDir, 'main.js');
const functionDir = path.resolve('api');

if (!fs.existsSync(entryFile)) {
  throw new Error(`Nest build output not found: ${entryFile}`);
}

fs.mkdirSync(functionDir, { recursive: true });
const bootstrapBundle = fs.readFileSync(entryFile, 'utf8')
  .replace('void bootstrap();', '')
  .concat('\nmodule.exports = { bootstrap };\n');
fs.writeFileSync(path.join(outputDir, 'main.js'), bootstrapBundle);
fs.writeFileSync(path.join(functionDir, 'index.js'), `const { bootstrap } = require('../dist-build/src/main');
const { createServer } = require('node:http');

let appPromise;
let handlerPromise;

function setCors(request, response) {
  const origin = request.headers.origin;
  if (origin) response.setHeader('Access-Control-Allow-Origin', origin);
  response.setHeader('Vary', 'Origin');
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,apikey');
  response.setHeader('Access-Control-Max-Age', '86400');
}

module.exports = async (request, response) => {
  setCors(request, response);
  if (request.method === 'OPTIONS') {
    response.statusCode = 204;
    response.end();
    return;
  }

  try {
    appPromise ??= bootstrap();
    const app = await appPromise;
    handlerPromise ??= new Promise((resolve, reject) => {
      const server = createServer(app.getHttpAdapter().getInstance());
      server.listen(0, '127.0.0.1', () => resolve((req, res) => app.getHttpAdapter().getInstance()(req, res)));
      server.on('error', reject);
    });
    const handler = await handlerPromise;
    handler(request, response);
  } catch (error) {
    console.error('Nest Vercel handler failed', error);
    if (!response.headersSent) {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify({ statusCode: 500, message: 'Internal server error' }));
    }
  }
};
`);
