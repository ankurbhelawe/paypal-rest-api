//read f2, f1
//print f1 1st always, then f2
// check await async promise

var fs = require('fs');
var ctr=0;
var a;
var b;
fs.readFile('data2', function(err,data){
    b=data.toString();
    ctr++;
    onComplete();
})

fs.readFile('data1', function(err,data2){
    a=data2.toString();
    ctr++;
    onComplete();
})

function onComplete(){
if(ctr==2){
    console.log(a);
    console.log(b);
}
}