var http = require('http');
var fs = require('fs'); //levanto el módulo fileserver
var url = require('url');
var mime_types = {
   'js' : 'text/javascript',
   'html' : 'text/html',
   'css' : 'text/css',
   'jpg' : 'image/jpg',
};

http.createServer(function(req,res){
	var path_nombre = (url.parse(req.url).pathname == '/') ? '/index.html' : url.parse(req.url).pathname; //si la ruta está vacía, me devuelve index.html. Si no, me parsea lo que haya en la ruta.
    var ruta_a_archivo = 'contenido/' + path_nombre; //busca en mi carpeta "contenido" el archivo que se llame como "path nombre". 
	fs.readFile(ruta_a_archivo, function(err,data){
	var extension = ruta_a_archivo.split('.').pop(); //toma la extensión de ruta archivo
    var mime_type = mime_types[extension]; //vusca en mi variable mime_types la que coincida con la extensión
    res.writeHead(200, {'Content-Type': mime_type});
   	res.end(data);
});

	
}).listen("8080", function(){
	console.log("cambio");
});
















