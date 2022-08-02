/*************** Require's *************************/
const fs = require('fs')
const path = require('path')

/******* importando os produtos no JSON *************/
const produtos = require("../data/produtos.json");

/**********************************************************************************/
const Produto = {
  findAll: () => {
    return produtos
  },
  findOne: (id) => {
    return produtos.find(produto => id == produto.id)
  },
  filter: (categoria) => {
    return produtos.filter(produto => produto.categoria == categoria)
  },
  save: (listaASerSalva) => {
    fs.writeFileSync(path.join(__dirname, '../data/produtos.json'), JSON.stringify(listaASerSalva));
  },
  update: (idRecebido, produtoRecebido) => {
    const produtos = this.findAll();
    const produtoAtualizado = produtos.find(produto => produto.id == idRecebido);

    produtoAtualizado.nome = produtoRecebido.nome
    produtoAtualizado.preco = produtoRecebido.preco
    produtoAtualizado.desconto = produtoRecebido.desconto
    produtoAtualizado.status = produtoRecebido.status
    produtoAtualizado.descricao.marca = produtoRecebido.marca
    produtoAtualizado.descricao.altura = produtoRecebido.altura
    produtoAtualizado.descricao.largura = produtoRecebido.largura
    produtoAtualizado.descricao.peso = produtoRecebido.peso
    produtoAtualizado.categoria = produtoRecebido.categoria

    this.save(produtos);
  },
  delete: (idRecebido) => {
    const produtos = Produto.findAll();
    const novaLista = produtos.filter(produto => produto.id != idRecebido)

    this.save(novaLista);
  },

};


module.exports = Produto