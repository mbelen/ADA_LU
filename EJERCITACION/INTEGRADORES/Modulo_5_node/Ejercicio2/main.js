var http = require('http');
var url = require('url');
var miModulo = require('./modulo');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-type':'text/html'});
	var q =req.url;
	console.log(q)
	let respuesta = miModulo.saludo(q)
	res.write(respuesta);
	res.end();
}).listen(8080);














