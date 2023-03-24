const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('Hello World');
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server listening on port: http://localhost:5000`);
});
