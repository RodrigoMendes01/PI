const userController = {
  index: (req, res) => {
    res.render('paginaCadastro1')
  },
  show: (req, res) => {
    res.render('paginaCadastro2')
  },
  display: (req, res) => {
    res.render('paginaUsuario')
  }
}

module.exports = userController