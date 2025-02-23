const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Method:', req.method);
  console.log('Method:', req.url);
  console.log('Method:', req.headers);

  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Request received.');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
