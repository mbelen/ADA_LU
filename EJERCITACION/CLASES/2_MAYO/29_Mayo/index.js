var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index', { title: "I have no idea what I'm doing" });
});

app.listen(3000);