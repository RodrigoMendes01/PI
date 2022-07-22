const Produto = require("../models/Produto")

const produtoController = {
  index: (req, res) => {
    const produtos = Produto.findAll();
    res.render('paginaProdutos', {produtos})
  },
 
  detail: (req, res) => {
    const produto = Produto.findOne(req.params.id)
    let produtosRelacionados = Produto.filter(produto.categoria)
    
    if(produtosRelacionados.length > 5){
      produtosRelacionados = produtosRelacionados.slice(0, 5)
    } 

    res.render('detalheProduto', {produto, produtosRelacionados})
  }
}

module.exports = produtoController;