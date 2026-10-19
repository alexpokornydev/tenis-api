function applyCors(req, res) {
  const origin = req.headers.origin;
  if (origin) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization,apikey');
  res.setHeader('Access-Control-Max-Age', '86400');
}

module.exports = async function handler(req, res) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const upstreamBase = process.env.API_UPSTREAM_URL;
  if (!upstreamBase) {
    res.statusCode = 503;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ statusCode: 503, message: 'API_UPSTREAM_URL is not configured.' }));
    return;
  }

  try {
    const incomingUrl = new URL(req.url || '/', 'https://vercel.invalid');
    const baseUrl = upstreamBase.replace(/\/+$/, '');
    const upstreamUrl = `${baseUrl}${incomingUrl.pathname}${incomingUrl.search}`;
    const headers = { ...req.headers, host: new URL(baseUrl).host };
    delete headers['x-vercel-id'];
    delete headers['x-forwarded-for'];

    const upstream = await fetch(upstreamUrl, {
      method: req.method,
      headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
      duplex: 'half',
    });

    res.statusCode = upstream.status;
    upstream.headers.forEach((value, key) => {
      if (!['transfer-encoding', 'connection', 'content-encoding'].includes(key.toLowerCase())) res.setHeader(key, value);
    });
    res.end(Buffer.from(await upstream.arrayBuffer()));
  } catch (error) {
    console.error('API upstream proxy failed', error);
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ statusCode: 502, message: 'API upstream is unreachable.' }));
  }
};
