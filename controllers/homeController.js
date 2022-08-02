const Produto = require("../models/Produto")

const homeController = {
  index: (req, res) => {
    const produtos = Produto.findAll()

    const produtosEmOferta = produtos.filter(produto => {
      return produto.desconto !== true && produto.desconto >= 5}).slice(0, 12)
    
    const produtosUltimosVistos = produtos.filter(produto => produto.status === 'normal').slice(0, 12)

    res.render('paginaHome', {produtosEmOferta, produtosUltimosVistos})
  },
  about: (req, res) => {
    res.render('paginaSobre')
  }
} 

module.exports = homeController