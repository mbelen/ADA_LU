var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	fs.readFile('index.html', function(err,data){
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		res.end();
	})
}).listen(8080)


//200 es el status (como 404). 200 es que recibí el requerimiento y te mando la respuesta