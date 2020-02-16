const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

readFile('test.json', 'utf-8')
    .then((data) => console.log(data))
    .then(() => readFile('data/test-2.json', 'utf-8'))
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log('done'))