var express = require('express');
var app = express();

var fs = require('fs');

var fileContents = fs.readFileSync('data.txt', 'utf-8');

app.get('/', function(req, res) {
	res.header('Content-Type', 'text/html')
	res.send(fileContents);
});

var server = app.listen(6670, function() {
	console.log('Express server listening on port ' + server.address().port);
});
