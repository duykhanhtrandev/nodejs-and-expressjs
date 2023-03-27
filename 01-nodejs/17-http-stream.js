var http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf8');
  // res.end(text);
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });
  fileStream.on('error', (error) => {
    res.end(error);
  });
});

server.listen(
  port,
  hostname,
  console.log(`Server listening on: http://${hostname}:${port}`)
);
