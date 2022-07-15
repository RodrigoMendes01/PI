const produtoController = {
  index: (req, res) => {
    res.render('detalheProduto')
  },
  show: (req, res) => {
    res.render('paginaProdutos')
  }
}

module.exports = produtoController;