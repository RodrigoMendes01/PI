/*************** Require's *************************/


/******* importando os produtos no JSON *************/
const produtos = require("../data/produtos.json");

const Produto = {
  findAll: () => {
    return produtos
  },
  findOne: (id) => {
    return produtos.find(produto => id == produto.id)
  },
  filter: (categoria) => {
    return produtos.filter(produto => categoria == produto.categoria)
  }
};


module.exports = Produto