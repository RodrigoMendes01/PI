const Produto = require("../models/Produto")

const produtoController = {
  index: (req, res) => {
    const produtos = Produto.findAll();
    res.render('paginaProdutos', {produtos})
  },
  show: (req, res) => {
    res.render('detalheProdutos')
  }
}

module.exports = produtoController;