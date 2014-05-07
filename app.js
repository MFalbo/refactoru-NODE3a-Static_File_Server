var express = require('express');
var app = express();

var fs = require('fs');


app.get('/public/:filename', function(req, res) {
	fs.readFile("./public/" + req.params.filename, function(err, data){
		res.header('Content-Type', 'text/html')
		res.send(data);
	});
});

var server = app.listen(6670, function() {
	console.log('Express server listening on port ' + server.address().port);
});
