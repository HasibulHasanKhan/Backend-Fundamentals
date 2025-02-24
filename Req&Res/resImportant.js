// const http = require('http');
// const { URL } = require('url');

// const server = http.createServer((req, res) => {
//   const myURL = new URL(req.url, `http://${req.headers.host}`);

//   // Convert query parameters to a readable text format
//   const queryParams = [...myURL.searchParams.entries()]
//     .map(([key, value]) => `${key}: ${value}`)
//     .join('\n');

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.write(`Path: ${myURL.pathname}\n`);
//   res.write(`Query Params:\n${queryParams || 'None'}`);
//   res.end();
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });

//---------------------------------
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  const myURL = new URL(req.url, `http://${req.headers.host}`);

  // Convert query parameters to JSON format
  const queryObject = Object.fromEntries(myURL.searchParams.entries());

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify(
      { message: 'Query received', path: myURL.pathname, query: queryObject },
      null,
      2
    )
  );
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
