//Inclusión de módulos
var createError = require('http-errors');
var express = require('express');
var path = require('path'); //es un módulo para trabajar con el path y para trabajar con params y con parseo
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Módulos propios
var indexRouter = require('./routes/index'); //ROUTERS. Como son módulos propios, se llaman =/= que los de arriba
var usersRouter = require('./routes/users'); //ROUTERS

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //a partir del path, me voy a quedar con la ruta.
app.set('view engine', 'jade'); //motor de vista

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); //cuando tenga / solo, iré a index router
app.use('/users', usersRouter); //cuando tenga /user, iré a usersRouter

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); // next: derivo la solución a otro módulo. En este caso, es al módulo que maneja el error 
  //Si yo no puedo resolver la petición en el módulo en que estoy paradx, tengo que pasársela al módulo siguiente a través de next. Porque, si no, quedo atrapada en el app.use y no pasa nada (rec: la programación es secuencial)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; //está definiendo los entornos. Por un lado está el de desarrollo y por otro el productivo.

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; //exporta la app completa.
