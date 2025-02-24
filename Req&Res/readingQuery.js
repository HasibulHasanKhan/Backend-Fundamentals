// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   console.log('Query Parameters:', parsedUrl.query);

//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(
//     JSON.stringify({ message: 'Query received', query: parsedUrl.query })
//   );
// });

// server.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

//-------------------------------------
const http = require('http'); // Importing the http module
const { URL } = require('url'); // Importing the URL class

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Create a new URL object from the request URL
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

  // Log the query parameters to the console
  console.log('Query Parameters:', parsedUrl.searchParams);

  // Prepare the response header to indicate JSON content
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Send a response with a JSON object containing the query parameters
  const queryParams = {};
  parsedUrl.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  res.end(JSON.stringify({ message: 'Query received', query: queryParams }));
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
