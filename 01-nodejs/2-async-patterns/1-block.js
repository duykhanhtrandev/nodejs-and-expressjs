const { timeEnd } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    // BLOCKING CODE !!!!
    console.time();
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    console.timeEnd();
    res.end('<h1>About Page</h1>');
  } else {
    res.end(`
      <h1>OOPS!</h1>
      <p>Error Page</p>
    `);
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server listening on port: http://localhost:${port}`);
});
