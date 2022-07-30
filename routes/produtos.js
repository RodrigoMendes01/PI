/*** Require's ***/
const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path')

/*** Controller Require ****/
const produtoController = require('../controllers/produtoController');

/*** Middlewares ***/
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folder = path.join(__dirname, "../public/images/imgprodutos")
    callback(null, folder )
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  }
})

const upload = multer({storage})

/*** Get all products ***/
router.get('/', produtoController.showAllProducts);

/*** Creat One Product ***/
router.get('/criar', produtoController.createOneProduct);
router.post('/criar', upload.single('imagem'), produtoController.storeProduct)

/*** Get One Product ***/
router.get('/detalhe/:id/', produtoController.detail);

/*** Edit One Product ***/


/*** Delete One Product ***/











module.exports = router;