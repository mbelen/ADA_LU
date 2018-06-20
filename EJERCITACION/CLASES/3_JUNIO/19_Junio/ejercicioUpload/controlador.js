var misImagenes = [];


function guardarImagen(req, res) {
  
if (!req.files)
    
    return res.status(400).send('No se ha subido ningún archivo');
 
  // Se recupera el nombre del archivo
  let sampleFile = req.files.sampleFile;

  console.log(sampleFile);

  var fileName = req.files.sampleFile.name;
 
  // El método mv guarda mi imagen en alguna parte de mi server
  sampleFile.mv(__dirname + '/cliente/uploads/' + fileName, function(err) {
  
  var miImagen = __dirname + '/cliente/uploads/' + fileName;
  misImagenes.push(miImagen);
  console.log(misImagenes);

  console.log("HALP")
    if (err)
      return res.status(500).send(err);
  	  res.redirect('/', /*{imagenes:misImagenes}*/)
  });
}

function enviarImagen(req,res){
	imagenesJSON = {"imagenes":misImagenes};
  	
  	res.render('index'/*, {imagenes:misImagenes}*/)
}

//Creo un array con mis imágenes
module.exports = {
   guardarImagen:guardarImagen,
   enviarImagen:enviarImagen
};