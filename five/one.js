const fs=require('fs');
const util= require('util')
const readFile= util.promisify(fs.readFile);

const promise = readFile('./test.json','utf-8');

promise
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
    .finally(()=> console.log('done'));
