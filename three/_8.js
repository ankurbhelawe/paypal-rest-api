var events = require("events");
var eventsEmitter = new events.EventEmitter();

eventsEmitter.on('read', function(file){
    console.log('l1'+file);
});

eventsEmitter.on('read', function(file){
    console.log('l2'+file);
});

eventsEmitter.on('connect', function(file){
    console.log('connect event -'+file);
});

eventsEmitter.emit('read', 'j.txt');
eventsEmitter.emit('connect', 'Server Connected');
