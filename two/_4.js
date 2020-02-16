//built in node modules

var fs = require('fs')
filename = process.argv[2];
fs.readFile(filename, function(err, data) {
    console.log(data.toString());
});