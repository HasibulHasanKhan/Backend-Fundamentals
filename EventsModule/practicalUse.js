// (a) EventEmitter in HTTP Server

// const http = require('http');
// const server = http.createServer();

// server.on('request', (req, res) => {
//   console.log(`Received request for: ${req.url}`);
//   res.on('Hello from Node.js Server.');
// });

// server.listen(3000, () => console.log('Server running'));

// File Read Stream Events :

// const fs = require('fs');
// const readStream = fs.createReadStream('sample.txt', 'utf8');

// readStream.on('data', (chunk) => {
//   console.log(`Received chunk: ${chunk}`);
// });

// readStream.on('end', () => {
//   console.log('File read completed.');
// });
