const express = require("express");
const router = express.Router()
const produtoController = require('../controllers/produtoController')

router.get('/produtosdelimpeza', produtoController.index);

router.get('/detalhe/:id?', produtoController.detail);

module.exports = router;