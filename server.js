var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log('The server is running...');
console.log('Open at: http://localhost:3000');