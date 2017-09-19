var express = require('express');
var router = express.Router();

var random = Math.random();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('test');
  
  console.log(random);
  
  
});

module.exports = router;