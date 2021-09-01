var express= require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
  fs.readFile( __dirname + "/../data/menus.json", 'utf8', function (err, data) {
     console.log( data );
     res.json( data );
  });
})

module.exports = router;
