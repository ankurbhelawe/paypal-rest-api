var fs = require('fs');

var data = '';

var readStream = fs.createReadStream('airports.dat', 'utf-8');
var i=1;

readStream.on('end', function(){
    console.log('Completed!');
});

readStream.on('data', function(chunk){
    data+=chunk;
    console.log('chunk'+i);
    i++;
});