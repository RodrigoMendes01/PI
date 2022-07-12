const express = require("express");
const router = express.Router()
const produtoController = require('../controllers/produtoController')

router.get('/produtosdelimpeza', produtoController.show);

router.get('/detalhe/:id?', produtoController.index);

module.exports = router;