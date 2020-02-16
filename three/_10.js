var http = require('http');
var fs = require('fs');
var events = require("events");
var eventEmmiter = new events.EventEmitter();

var airport = [];
var city = []
var file = fs.readFile('./airports.dat', function (err, data) {
    var x = data.toString().split("\n");
    x.forEach(element => {
        var k = element.split(',');
        airport.push(k[1]);
        city.push(k[2]);
    });
    eventEmmiter.emit('server','airport.dat');
});

eventEmmiter.on('server', function (file) {
    http.createServer(function (req, res) {
        if (req.url == '/city') {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write(city.toString());
            res.end();
        }
        else if (req.url =='/airport') {
            res.writeHead(200, { 'content-Type': 'text/html' });
            res.write(airport.toString());
            res.end();
        }
    }).listen(8070);
});


