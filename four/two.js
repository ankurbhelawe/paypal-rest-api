// post user details as json
//get uname pwd and check
// delete user


var express = require('express')
var app = express();

app.use( express.json() ); // to support JSON extended bodies

//middleware
app.use(function(req,res,next){
    console.log('in middleware')
    let dateObject1= Date.now();
    next();
    let dateObject2= Date.now();
    executionTime=dateObject2-dateObject2;
    console.log("Execution time: "+ executionTime);
})

// app.use(function(req,res,next){
//     console.log('in middleware')
//     console.log('in middleware')
//     next();
// })
var id;
var name;
var address;
var username;
var password;

app.post('/new', function(req, res) {
    id = req.body.id;
     name = req.body.name;
     address = req.body.address;
     username = req.body.username;
    password = req.body.password;

    res.send(id + ' ' + name + ' ' + address+ ' ' + username);
});

//path parameters
app.get('/user', function(req,res){
    if(req.query['id']==id && req.query['pwd']==password){
        res.send('Hello username:'+ username)
    }
})

//add delete user also
app.listen(3000);
