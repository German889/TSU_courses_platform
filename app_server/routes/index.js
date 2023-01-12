var express = require('express');
var router = express.Router();
var rootPath = require('app-root-path');
const normalize = require('normalize-path');

router.get('/', function(req, res, next) {
  res.render('static/index-pattern');
  console.log('paaaath='+rootPath); // служебная информация, можно убрать
});
router.get('/courses', function(req, res, next){
  res.render('static/course_market_pattern');
});
router.get('/java-dev', function(req, res, next){
  res.render('static/course_pg_pattern');
});

module.exports = router;
