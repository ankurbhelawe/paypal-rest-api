//read filenames from json and read all files and display

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

readFile('./fileNames.json', 'utf-8')
.then((data) => {
    var arr=JSON.parse(data)
    var allfiles=arr.all
    for (i=0; i<allfiles.length; i++){
        readFile(allfiles[i], 'utf-8')
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
})