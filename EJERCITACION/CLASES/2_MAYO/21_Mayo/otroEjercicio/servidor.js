var http = require('http');
var fs = require('fs'); //levanto el módulo fileserver

http.createServer(function(req,res){
	fs.readFile('./index.html', function(err,data){
	res.writeHead(200, {'Content-Type':'text/html'});
	
	res.write(data);
	res.end
});

	
}).listen("8080", function(){
	console.log("lo QUÉ");
});
















