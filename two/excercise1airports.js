var fs = require('fs');
var df;
fs.readFile('airports.dat', function(err,data){
    df=data.toString();
    onComplete();
})

function onComplete(){
    var lineWiseDf = df.split(/\r\n|\n/);
    var lines = [];
    var countResult=0;

    for (var i=1; i<lineWiseDf.length; i++) {
        var data = lineWiseDf[i].split(',');
        var dfInstance = [];
        for (var j=0; j<13; j++) {
            dfInstance.push(data[j]);
        }
        lines.push(dfInstance);
    }

    country = '"'+process.argv[2]+'"';
    type = '"'+process.argv[3]+'"';

    //console.log(country, type);
    lines.forEach((row)=>{
        //console.log(row[3],row[12]);
        if(row[3]==country && row[12]==type){
            console.log(row[1]);
            countResult++;
        }
    });
    console.log("Number of "+type+"s in "+country+" are:"+countResult);
}

