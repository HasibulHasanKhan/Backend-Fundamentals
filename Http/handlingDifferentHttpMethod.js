const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a GET request');
  } else if ((req.method = 'POST')) {
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
