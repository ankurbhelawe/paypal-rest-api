var fs = require('fs');

async function jsonAppendCourse(new_element){
    filename='../userData/courses.json'
    type='utf8'
    await fs.readFile(filename, type, function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //converting read data to object
            obj.courses.push(new_element); //pushing new data to the array 'courses' in object
            json = JSON.stringify(obj); //converting it back to json
            fs.writeFile(filename, json, type, function (err){
                if(err) throw err;
            }); // writing it back 
        }
    })
}
module.exports = jsonAppendCourse;