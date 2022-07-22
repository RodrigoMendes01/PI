const produtos = require("../data/produtos.json");
const Produto = {
  findAll: () => produtos, 

  findOne: (id) => produtos.find(produto => id == produto.id),

  filter: (categoria) => produtos.filter(produto => categoria == produto.categoria)
};


module.exports = Produto