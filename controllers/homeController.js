const Produto = require("../models/Produto")

const HomeController = {
  index: (req, res) => {
    res.render('paginaHome')
  }
} 

module.exports = HomeController