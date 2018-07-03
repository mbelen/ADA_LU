var express = require('express');
var app = express();
app.get('/:id', function(req,res){
	console.log(req);
	res.send('el id recibido es ' + req.params.id)
});
app.listen(3000);