//multiple promises
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

let promises = Promise.all([
    readFile('./test.json', 'utf-8'),
    readFile('./test2.json', 'utf-8'),
    readFile('./test3.json', 'utf-8')
]);

promises
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log('done'))