const express = require("express");
const router = express.Router();
const path = require('path');
const produtoController = require('../controllers/produtoController');
const multer = require('multer');


// detalhe produto
router.get('/produtos', produtoController.showAllProducts);
router.get('/detalhe/:id?', produtoController.detail);

// registro produto
const multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../data/produtos.json");
    callback(null, folder);
  },
  filename: (req, file, callback) => {
    const imageName = Date.now() + file.originalname;
    callback(null, imageName);
  }
});

const upload = multer( { storage: multerDiskStorage });

router.get('/criar', produtoController.mostrarFormularioProduto);
router.post('/criar', upload.single('imagem'), produtoController.criarProduto);

module.exports = router;