var format = require('string-format')
var msg= format('"{firstName} {lastName}" <{email}>',{
    firstName: 'T',
    lastName: 'B',
    email: 'abc@gm.com'
})

console.log(msg);