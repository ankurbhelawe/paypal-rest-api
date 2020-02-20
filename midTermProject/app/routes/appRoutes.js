var express = require('express')
var app = express();
var _ = require('lodash');
var fs = require('fs');
app.use(express.json()); // to support JSON extended bodies
var session = require('express-session');
const readFile = require('../services/readPromise') // returns a promise that reads a file
const removeCourse = require('../services/removeCourse'); //input: course id; removes a course created by a teacher
const addStudent = require('../services/addStudent');//adds a new student 
const registerCourse = require('../services/registerCourse');//registers a course for student
const dropCourse = require('../services/dropCourse'); //drops a course registered by a student
const addTeacher = require('../services/addTeacher'); //adds a new teacher
const addCourse = require('../services/addCourse'); //creates new course for teacher

app.set('view engine', 'pug');
app.set('views', '../views');
app.use(session({ secret: "yfgab182736bhb0sfa", resave: false, saveUninitialized: true }));
app.use(express.static('assets'));

//Home Page

app.get('/home', function (req, res) {
    res.render('home')
})

app.get('/', function (req, res) {
    res.redirect('/home')
    // res.send('Hello')
})  // Set Default as Home Page

app.get('/*', function (req, res) {
    res.redirect('/home')
}) // Redirect undefined route to Home Page

//Student Signup

app.post('/student/signup', function (req, res) {
    //res.send('Student Signup')
    res.render('studentSignup')
})


var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded(
    { extended: false })
)

app.post('/student/signupSuccess', function (req, res) {
    const promise = readFile('../userData/students.json', 'utf-8');
    var submittedData = req.body;
    var submittedID = submittedData.id;
    var uniqueFlag = 0;
    promise
        .then((data) => {
            var allStudents = JSON.parse(data).students;
            return allStudents
        })
        .then((allStudents) => {
            if (_.find(allStudents, { 'id': submittedID }) == undefined) {             //using Lodash to check if student with submittedID already exists
                addStudent(submittedData)
                uniqueFlag = 1;
            }
        })
        .then(() => {
            res.render('studentSignupSuccess', {
                message: "SignUp Success",
                data: submittedData,
                flag: uniqueFlag
            })
        })
        .catch((err) => console.log(err))
})


//Student Log In

app.post('/student/signin', function (req, res) {
    res.render('studentLogin')
})

// Student Authentication
app.post('/student/authentication', function (req, res) {

    var submittedData = req.body;
    var submittedID = submittedData.id;
    var submittedPassword = submittedData.password;
    auth = false;

    const promiseStudents = readFile('../userData/students.json', 'utf-8');
    promiseStudents
        .then((data) => {
            var allStudents = JSON.parse(data).students;
            return allStudents
        })
        .then((allStudents) => {
            if (!(_.find(allStudents, { 'id': submittedID, 'password': submittedPassword }) == undefined)) {             //using Lodash to check authenticate ID with password
                auth = true;
                studentObject = _.find(allStudents, { 'id': submittedID });// getting object from data file 
                req.session.user = studentObject;
                return studentObject
            }
        })
        .then((studentObject) => {
            res.render('studentAuth', {
                data: studentObject,
                authenticated: auth
            })
        })
        .catch((err) => console.log(err))
})

// Student Dashboard
app.post('/student/dashboard', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('studentDashboard', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var courses;
        const promiseCourse = readFile('../userData/courses.json', 'utf-8');
        promiseCourse
            .then((data) => {
                var allcourses = JSON.parse(data).courses;
                courses = allcourses;
            })
            .then(() => {
                studentObject = req.session.user;
                return studentObject
            })
            .then((studentObject) => {
                res.render('studentDashboard', {
                    data: studentObject,
                    authenticated: auth,
                    courseList: courses
                })
            })
            .catch((err) => console.log(err))
    }
})

// Student Register Course
app.post('/student/register', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('studentRegister', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var courses;
        const promiseCourse = readFile('../userData/courses.json', 'utf-8');
        promiseCourse
            .then((data) => {
                var allcourses = JSON.parse(data).courses;
                courses = allcourses;
            })
            .then(() => {
                studentObject = req.session.user;
                return studentObject
            })
            .then((studentObject) => {
                res.render('studentRegister', {
                    data: studentObject,
                    authenticated: auth,
                    courseList: courses
                })
            })
            .catch((err) => console.log(err))
    }
})


app.post('/student/registerSuccess', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('studentRegisterSuccess', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var submittedData = req.body;
        var submittedID = submittedData.register_choice;//submitted course id
        registerCourse(submittedID, req.session.user.id);
        res.render('studentRegisterSuccess', {
            authenticated: auth,
            user: req.session.user,
            data: submittedData.register_choice
        })

    }
})

// Student Drop Course
app.post('/student/drop', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('studentDrop', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var courses;
        const promiseCourse = readFile('../userData/courses.json', 'utf-8');
        promiseCourse
            .then((data) => {
                var allcourses = JSON.parse(data).courses;
                courses = allcourses;
            })
            .then(() => {
                studentObject = req.session.user;
                return studentObject
            })
            .then((studentObject) => {
                res.render('studentDrop', {
                    data: studentObject,
                    authenticated: auth,
                    courseList: courses
                })
            })
            .catch((err) => console.log(err))
    }
})

app.post('/student/dropSuccess', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('studentDropSuccess', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var submittedData = req.body;
        var submittedID = submittedData.drop_choice;//submitted course id
        dropCourse(submittedID, req.session.user.id);
        res.render('studentDropSuccess', {
            authenticated: auth,
            user: req.session.user,
            data: submittedData.drop_choice
        })

    }
})

//Teacher Signup

app.post('/teacher/signup', function (req, res) {
    res.render('teacherSignup')
})

app.post('/teacher/signupSuccess', function (req, res) {
    const promise = readFile('../userData/teachers.json', 'utf-8');
    var submittedData = req.body;
    var submittedID = submittedData.id;
    var uniqueFlag = 0;
    promise
        .then((data) => {
            var allTeachers = JSON.parse(data).teachers;
            return allTeachers
        })
        .then((allTeachers) => {
            if (_.find(allTeachers, { 'id': submittedID }) == undefined) {             //using Lodash to check if student with submittedID already exists
                addTeacher(submittedData)
                uniqueFlag = 1;
            }
        })
        .then(() => {
            res.render('teacherSignupSuccess', {
                message: "SignUp Success",
                data: submittedData,
                flag: uniqueFlag
            })
        })
        .catch((err) => console.log(err))
})


//Teacher Log In

app.post('/teacher/signin', function (req, res) {
    res.render('teacherLogin')
})

// Teacher Authentication
app.post('/teacher/authentication', function (req, res) {

    var submittedData = req.body;
    var submittedID = submittedData.id;
    var submittedPassword = submittedData.password;
    auth = false;

    const promiseTeachers = readFile('../userData/teachers.json', 'utf-8');
    promiseTeachers
        .then((data) => {
            var allTeachers = JSON.parse(data).teachers;
            return allTeachers
        })
        .then((allTeachers) => {
            if (!(_.find(allTeachers, { 'id': submittedID, 'password': submittedPassword }) == undefined)) {             //using Lodash to check authenticate ID with password
                auth = true;
                teacherObject = _.find(allTeachers, { 'id': submittedID });// getting object from data file 
                req.session.user = teacherObject;
                return teacherObject
            }
        })
        .then((teacherObject) => {
            res.render('teacherAuth', {
                data: teacherObject,
                authenticated: auth
            })
        })
        .catch((err) => console.log(err))
})

// Teacher Dashboard
app.post('/teacher/dashboard', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('teacherDashboard', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var courses;
        const promiseCourse = readFile('../userData/courses.json', 'utf-8');
        promiseCourse
            .then((data) => {
                var allcourses = JSON.parse(data).courses;
                //[TODO]: Add code to display my COurses
                courses = allcourses;
            })
            .then(() => {
                teacherObject = req.session.user;
                return teacherObject
            })
            .then((teacherObject) => {
                res.render('teacherDashboard', {
                    data: teacherObject,
                    authenticated: auth,
                    courseList: courses
                })
            })
            .catch((err) => console.log(err))
    }
})


// Teacher Create Courses
app.post('/teacher/create', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('teacherCreate', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        res.render('teacherCreate', {
            authenticated: auth,
        })
    }
})

app.post('/teacher/createSuccess', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('teacherCreateSuccess', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        const promiseCourse = readFile('../userData/courses.json', 'utf-8');
        var submittedData = req.body;
        submittedData["students_registered"] = [];
        submittedData["teacher_id"] = req.session.user.id;
        submittedData["teacher_name"] = req.session.user.name;
        submittedData["date_created"] = Date.now();

        var submittedID = submittedData.id;//submitted course id
        var uniqueFlag = 0;
        promiseCourse
            .then((data) => {
                var allcourses = JSON.parse(data).courses;
                return allcourses
            })
            .then((allcourses) => {
                if (_.find(allcourses, { 'id': submittedID }) == undefined) {             //using Lodash to check if student with submittedID already exists
                    addCourse(submittedData)
                    uniqueFlag = 1;
                }
            })
            .then(() => {
                res.render('teacherCreateSuccess', {
                    authenticated: auth,
                    user: req.session.user,
                    data: submittedData,
                    flag: uniqueFlag
                })
            })
            .catch((err) => console.log(err))
    }
})

//View students registered for my course

app.post('/teacher/registeredStudents', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('registered', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var submittedData = req.body;
        var submittedID = submittedData.c_id;//submitted course id
        var students;
        const promiseStudents = readFile('../userData/students.json', 'utf-8');
        promiseStudents
            .then((data) => {
                var allStudents = JSON.parse(data).students;
                students = allStudents;
            })
            .then(() => readFile('../userData/courses.json', 'utf-8'))
            .then((data) => {
                var allCourses = JSON.parse(data).courses;
                return allCourses
            })
            .then((allCourses) => {
                courseObject = _.find(allCourses, { 'id': submittedID });// getting object from data file 
                return courseObject
            }
            )
            .then((courseObject) => {
                res.render('registered', {
                    course: courseObject,
                    authenticated: auth,
                    students: students,
                    user: req.session.user
                })
            })
            .catch((err) => console.log(err))

    }
})

// Teacher Remove Course
app.post('/teacher/remove', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('teacherRemove', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var courses;
        const promiseCourse = readFile('../userData/courses.json', 'utf-8');
        promiseCourse
            .then((data) => {
                var allcourses = JSON.parse(data).courses;
                courses = allcourses;
            })
            .then(() => {
                teacherObject = req.session.user;
                return teacherObject
            })
            .then((teacherObject) => {
                res.render('teacherRemove', {
                    data: teacherObject,
                    authenticated: auth,
                    courseList: courses
                })
            })
            .catch((err) => console.log(err))
    }
})

app.post('/teacher/removeSuccess', function (req, res) {
    if (!req.session.user) {
        auth = false;
        res.render('teacherRemoveSuccess', {
            authenticated: auth
        })
    }
    else {
        auth = true;
        var submittedData = req.body;
        var submittedID = submittedData.remove_choice;//submitted course id
        removeCourse(submittedID);
        res.render('teacherRemoveSuccess', {
            authenticated: auth,
            user: req.session.user,
            data: submittedData.remove_choice
        })

    }
})

//Log Out/ Sign Out (destroys the session)
app.post('/signout', function (req, res) {
    if (req.session) {
        req.session.destroy();
        res.redirect('/home');
    }
})

app.listen(8080);