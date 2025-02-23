const http = require('http');
// const { parse } = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);

  console.log('Qeury Parameters:', parseUrl.query);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Query received', Query: parseUrl.query }));
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
