const { bootstrap } = require('../dist-build/src/main');

let bootstrapPromise;
let serverPromise;

function cors(request, response) {
  const origin = request.headers.origin;
  if (origin) response.setHeader('Access-Control-Allow-Origin', origin);
  response.setHeader('Vary', 'Origin');
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,apikey');
  response.setHeader('Access-Control-Max-Age', '86400');
}

module.exports = async (request, response) => {
  cors(request, response);
  if (request.method === 'OPTIONS') { response.statusCode = 204; response.end(); return; }
  try {
    bootstrapPromise ??= bootstrap();
    const app = await bootstrapPromise;
    serverPromise ??= app.getHttpAdapter().getInstance().listen(0, '127.0.0.1');
    const server = await serverPromise;
    const address = server.address();
    const target = new URL(request.url, 'http://127.0.0.1');
    target.port = String(address.port);
    const headers = { ...request.headers };
    delete headers.host;
    const upstream = await fetch(target, { method: request.method, headers, body: ['GET', 'HEAD'].includes(request.method) ? undefined : request, duplex: 'half' });
    response.statusCode = upstream.status;
    upstream.headers.forEach((value, key) => { if (key.toLowerCase() !== 'transfer-encoding') response.setHeader(key, value); });
    response.end(Buffer.from(await upstream.arrayBuffer()));
  } catch (error) {
    console.error('Nest Vercel handler failed', error);
    if (!response.headersSent) response.statusCode = 500;
    response.end(JSON.stringify({ statusCode: 500, message: 'Internal server error' }));
  }
};
