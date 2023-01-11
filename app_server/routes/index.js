var express = require('express');
var router = express.Router();
var rootPath = require('app-root-path');
const normalize = require('normalize-path');

router.get('/', function(req, res, next) {
  
  //res.sendFile(rootPath +'/app_server/views/static/index-pattern.jade');
  //normalize(rootPath);
  res.render('static/index-pattern');
  console.log('paaaath='+rootPath);
});

module.exports = router;
