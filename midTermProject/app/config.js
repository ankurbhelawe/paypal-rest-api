var fs = require('fs');

//Creating Courses File
var objCourse = {
    courses: []
};

var json = JSON.stringify(objCourse);

fs.writeFile('./userData/courses.json', json, 'utf8', function (err){
    if(err) throw err;
});

//Creating Student File

var objStudent = {
    students: []
};

var json = JSON.stringify(objStudent);

fs.writeFile('./userData/students.json', json, 'utf8', function (err){
    if(err) throw err;
});

//Creating Teacher File
var objTeacher = {
    teachers: []
};

var json = JSON.stringify(objTeacher);

fs.writeFile('./userData/teachers.json', json, 'utf8', function (err){
    if(err) throw err;
});