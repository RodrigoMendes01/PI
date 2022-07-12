var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cadastro', function(req, res, next) {
  res.render('paginaCadastro1');
});

router.get('/cadastro2', function(req, res, next) {
  res.render('paginaCadastro2');
});
router.get('/perfil', function(req, res) {
  res.render('paginaUsuario');
})

module.exports = router;

