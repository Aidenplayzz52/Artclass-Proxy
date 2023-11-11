// npm install express http-proxy-middleware
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Define the target URL you want to proxy to
const target = 'https://artclass.site';

// Create a proxy middleware instance
const proxyMiddleware = createProxyMiddleware({
  target,
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
});

// Use the proxy middleware for all routes starting with '/'
app.use('/', proxyMiddleware);

// Start the Express server
app.listen(port, () => {
  console.log(`Proxy server is running at PORT ${port}`);
});