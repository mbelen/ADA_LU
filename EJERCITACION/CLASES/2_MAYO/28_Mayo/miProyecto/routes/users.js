var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Usuarios',
    users: ['Tutuca', 'Dr House', 'Alfombra']
  });
});

module.exports = router;
