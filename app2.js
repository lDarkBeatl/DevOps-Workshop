const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  switch(req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello World');
      break;

    case '/about':
      res.statusCode = 200;
      res.end('About Us');
      break;

    case '/contact':
      res.statusCode = 200;
      res.end('Contact Us');
      break;

    default:
      res.statusCode = 404;
      res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});