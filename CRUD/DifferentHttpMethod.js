const { rename } = require('fs');
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  //   const parseUrl2 = url.parse(req.url, true);
  const parseUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parseUrl.pathname;

  res.setHeader('Content-Type', 'text/html');

  switch (pathname) {
    case '/':
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.end('<h1> Form submitted succesfully! </h>');
      } else if (req.method === 'POST') {
        res.statusCode = 200;
        res.end('<h1>Method Not Allowed</h1>');
      } else {
        res.statusCode = 405;
        res.end('<h1>Method Not Allowed</h1>');
      }
      break;

    case '/about':
      if (req.method === 'GET') {
        res.statusCode = 405;
        res.end('<h1>About Us Page</h1>');
      } else {
        res.statusCode = 405;
        res.end('<h1>Method Not Allowed</h1>');
      }
      break;

    default:
      res.statusCode = 404; // Not Found
      res.end('<h1>Page Not Found</h1>');
      break;
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
