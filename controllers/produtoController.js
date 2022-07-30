/*** Require's ***/
const fs = require('fs');
const path = require('path');
const Produto = require("../models/Produto")

const produtoController = {
  /*** Get All Products ***/
  showAllProducts: (req, res) => {
    const produtos = Produto.findAll();
    res.render('paginaProdutos', {produtos})
  },
  /*** Creat One Product ***/
  createOneProduct: (req, res) => {
    res.render('cadastrarProduto')
  },
  /*** Store the Product ***/
  storeProduct: (req, res) => {
    const produtos = Produto.findAll();
    const produtoNovo = req.body
    console.log(produtoNovo)
    const arquivoImagem = req.file.filename
    let newId = produtos.length + 1

    produtos.push({
      id: newId, 
      nome: produtoNovo.nome,
      preco: produtoNovo.preco,
      desconto: produtoNovo.desconto,
      status: produtoNovo.status,
      imagem: arquivoImagem,
      descricao: {
        marca: produtoNovo.marca,
        altura: produtoNovo.altura,
        largura: produtoNovo.largura,
        peso: produtoNovo.peso,
      },
      categoria: produtoNovo.categoria  
    });
    fs.writeFileSync(path.join(__dirname, '../data/produtos.json'), JSON.stringify(produtos));

    res.redirect('/produtos/detalhe/' + newId)
  },
  /*** Show the detail of the product ***/
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