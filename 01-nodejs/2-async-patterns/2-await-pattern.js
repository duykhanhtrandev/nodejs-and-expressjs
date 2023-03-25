const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromies = util.promisify(readFile);
// const writeFilePromies = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-mind-grenade.txt',
      JSON.stringify(`THIS IS AWSOME: ${first} ${second}`),
      { flag: 'a+' }
    );

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText('./content/data.json')
//   .then((result) => console.log(JSON.parse(result)))
//   .catch((err) => console.log(err));
