const Produto = require("../models/Produto")

const produtoController = {
  // MOSTRAR TODOS OS PRODUTOS
  showAllProducts: (req, res) => {
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
  },
  // REGISTRAR PRODUTO
  mostrarFormularioProduto: (req, res) => {
    return res.render('cadastrarProduto')
  },
  criarProduto: (req, res) => {
    let { name, price, discount, category, description, imagem } = req.body;
    // RESOLVER ISSO AQUI

  }
}

module.exports = produtoController;