var fs = require('fs');
var _ = require('lodash');

async function jsonDropCourse(submittedID) {
    filename = '../userData/courses.json'
    type = 'utf8'
    await fs.readFile(filename, type, function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //converting read data to object
            for (i = 0; i < obj["courses"].length; i++) {
                if (obj["courses"][i].id == submittedID) {
                    //removing student id from array students_registered using Lodash
                    _.remove(obj["courses"], (e) => { 
                        return e == obj["courses"][i];
                    });
                }
            }
            json = JSON.stringify(obj); //converting it back to json

            fs.writeFile(filename, json, type, function (err) {
                if (err) throw err;
            }); // writing it back 
        }
    })
}

module.exports = jsonDropCourse;
