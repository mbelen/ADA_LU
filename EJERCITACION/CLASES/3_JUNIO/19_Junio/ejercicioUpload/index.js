
const express = require('express');
const path = require('path'); 
const fileUpload = require('express-fileupload');
const app = express();
var cors = require('cors');
const controlador = require('./controlador')

// default options
//app.use(fileUpload());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'cliente')));

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(cors());
 
app.post('/upload', controlador.guardarImagen);
app.get('/', controlador.enviarImagen)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
