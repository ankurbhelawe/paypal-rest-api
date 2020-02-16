function sum(a,b){
    console.log('Result: ',(a+b));
}

function mul(a, b){
    console.log('Result: ',(a*b));
}

function sub(a, b){
    console.log('Result: ',(a-b));
}

function div( a, b){
    if(b==0){
        console.log("Error div by 0!")
    }
    else{
        console.log('Result: ',(a/b));
    }
    
}

module.exports =sum,mul,sub,div;