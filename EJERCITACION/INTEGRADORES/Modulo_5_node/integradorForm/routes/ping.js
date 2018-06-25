var express = require('express');
var router = express.Router();
var controller = require('../controllers/controllerPing');

/**GET "ping"*/
router.get('/', controller.pingPong)

module.exports = router;
