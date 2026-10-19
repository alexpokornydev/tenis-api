const { bootstrap } = require('../dist-build/src/main');
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
