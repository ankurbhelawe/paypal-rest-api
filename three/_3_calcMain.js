var su= require('./_3_calcFunctions.js');

console.log("Enter sum/mul/sub/div operand1 operand2");
console.log(process.argv[2],process.argv[3],process.argv[4]);
if (process.argv[2]=="sum"){
    su(parseInt(process.argv[3]), parseInt(process.argv[4]));
}

//TODO all functions 