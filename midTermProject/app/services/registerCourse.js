var fs = require('fs');

async function jsonRegisterCourse(submittedID, studentID){
    filename='../userData/courses.json'
    type='utf8'
    await fs.readFile(filename, type, function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //converting read data to object
            for(i=0; i<obj["courses"].length; i++){
                if(obj["courses"][i].id==submittedID){
                    obj["courses"][i].students_registered.push(studentID);
                }
            }
            json = JSON.stringify(obj); //converting it back to json

            fs.writeFile(filename, json, type, function (err){
                if(err) throw err;
            }); // writing it back 
        }
    })
}
module.exports = jsonRegisterCourse;