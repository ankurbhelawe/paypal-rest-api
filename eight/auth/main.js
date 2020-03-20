var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
var express = require('express')
var app = express();

app.set('view engine','pug');
app.set('views','./views');
app.get('/index', function(req,res){
    res.render('formPage',{
        message: "hello world",
    })
})



app.get('/add',function(req,res){
    console.log(req.query)
    res.render('formPage',{
        message: "Data Submitted",
        data: JSON.stringify(req.query)
    })
})

//npm install body-parser

var bodyParser= require('body-parser')

app.use(bodyParser.urlencoded(
    { extended : false})
)

app.post('/add-post', function(req,res){
    console.log(req.body)
    res.render('formPage',{
        message:'Data Submitted Post',
        data:JSON.stringify(req.body)
    })
})
//runs at /add (get)

app.listen(3000)