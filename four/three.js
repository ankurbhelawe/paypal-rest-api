var express = require('express')
var app = express();

app.set('view engine','pug');
//create views folder
//create file page.pug
app.set('views','./views');
app.get('/index', function(req,res){
    res.render('page',{
        message: "hello world",
        friends:0,
        count:5
        //output
        //hello wow pug template from pug
        // hello world

        // no friends
        // test hello world

        //     1
        //     2
        //     3
        //     4
        //     5
    });
});

app.listen(3000)