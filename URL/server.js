const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, `http://${req.headers.host}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(`Path: ${myURL.pathname} \n`);
  res.write(`Query Params: ${myURL.searchParams.toString()}`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
