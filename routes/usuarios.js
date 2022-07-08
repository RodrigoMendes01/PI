var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cadastro', function(req, res, next) {
  res.render('paginaCadastro1');
});

router.get('/cadastro2', function(req, res, next) {
  res.render('paginaCadastro2');
});

module.exports = router;

