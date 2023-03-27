const { createReadStream } = require('fs');
const { size } = require('lodash');

const stream = createReadStream('./content/big.txt', {
  highWaterMark: 900000,
  encoding: 'utf8',
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark:900000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf-8'})

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (result) => {
  console.log(result);
});
