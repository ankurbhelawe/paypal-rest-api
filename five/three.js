const fs=require('fs');

function readFil(filename, type,dela){
    const promise= new Promise((resolve, reject)=>{
        fs.readFile(filename, type, (err, data)=>{
            if(err){ return reject(err);}
            setTimeout(()=>{resolve(data)}, dela);
        })
    })
    return promise;
}

const promise = readFil('./test.json','utf-8',3000);

promise
    .then((data)=> console.log(data))
    .catch((err)=> console.log(err))
    .finally(()=> console.log('done'));
