//Set up Node.js and create your first application.

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;   // status code 200 means OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World \n');  // This is a simple HTTP server that responds with "Hello World"
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
