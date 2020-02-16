
//for nodemon, npm install nodemon.
//add start to package.json (check)
//in terminal, npm start
var express = require('express')
var app = express();
app.use( express.json() ); // to support JSON extended bodies

//middleware
app.use(function(req,res,next){
    console.log('in middleware')
    next();
})



//add headers, query on Postman, check using GET Send
app.get('/', function(req,res){
    console.log(req.headers['username'])
    console.log(req.query['session'])
    console.log(req.query['test'])
    res.send('Hello')
})

//path parameters
app.get('/user/:id', function(req,res){
    console.log(req.params)
    res.send('Hello'+ req.params.id)
    //on postman: localhost:3000/user/ank12
    //{ id: 'ank12' }

    //body-> raw-> JSON-> type JSON
    /*
    {
	"number": 1001,
	"name": "Ankur"
	}
    */
    console.log(req.body)
    console.log(req.body.number)
    console.log(req.body.name)
})



app.get('/home', function(req,res){
    res.send('home')
})

app.get('/about', function(req,res){
    res.send('about')
})

app.get('/*', function(req,res){
    res.send('default page')
})


app.listen(3000);
