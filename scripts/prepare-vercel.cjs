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
fs.writeFileSync(path.join(functionDir, 'index.js'), "module.exports = require('../dist-build/src/main');\n");
const nestFiles = [];
function collectNestFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) collectNestFiles(file);
    else if (file.endsWith('.js')) nestFiles.push(file);
  }
}
collectNestFiles(outputDir);
for (const file of nestFiles) {
  const relative = path.relative(outputDir, file);
  const destination = path.join(functionDir, 'dist-build', 'src', relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  if (path.resolve(file) !== path.join(functionDir, 'index.js')) fs.copyFileSync(file, destination);
}

const handler = `const { bootstrap } = require('../dist-build/src/main');

let appPromise;
let callbackPromise;

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
    callbackPromise ??= new Promise((resolve) => app.getHttpAdapter().getInstance().listen(0, '127.0.0.1', () => resolve(app.getHttpAdapter().getInstance())));
    const callback = await callbackPromise;
    await new Promise((resolve, reject) => {
      callback(request, response, (error) => error ? reject(error) : resolve());
    });
  } catch (error) {
    console.error('Nest Vercel handler failed', error);
    if (!response.headersSent) {
      response.statusCode = 500;
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify({ statusCode: 500, message: 'Internal server error' }));
    }
  }
};
`;
fs.writeFileSync(path.join(functionDir, 'handler.js'), handler);
