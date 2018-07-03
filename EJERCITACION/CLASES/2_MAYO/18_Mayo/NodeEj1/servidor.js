var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-type':'text/html'});
	res.write('WIIIIIIII');
	res.end();
}).listen(8080);



//200 es el status (como 404). 200 es que recibí el requerimiento y te mando la respuesta