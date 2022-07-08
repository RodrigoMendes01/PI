const express = require("express");
const router = express.Router()

router.get('/produtosdelimpeza', function(req,res){
res.render('paginaProdutos');
});

router.get('/detalhe/:id', function(req, res){
  res.render('detalheProduto');
});

module.exports = router;