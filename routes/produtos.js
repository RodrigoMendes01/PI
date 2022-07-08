const express = require("express");
const router = express.Router()

router.get('/', function(req,res){
res.render('paginaprodutos')
})

router.get('/detalhe/:id', function(req, res){
  res.render('detalheProduto')
})

module.exports = router