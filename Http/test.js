const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('Method:', req.url);
//   console.log('URL:', req.url);
//   console.log('Headers:', req.headers.host);

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Request received');
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

//-------------------------------------
const server = http.createServer((req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    console.log('Body received:', body);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Data received', data: body }));
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
