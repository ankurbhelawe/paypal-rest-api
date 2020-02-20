const fs = require('fs');
const util = require('util')
const readFile = util.promisify(fs.readFile);

function readFil(filename, type){
    const promise = readFile(filename,type);
    return promise;
}

module.exports = readFil;