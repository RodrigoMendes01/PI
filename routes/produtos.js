/*** Require's ***/
const express = require("express");
const router = express.Router();

/*** Controller Require ****/
const produtoController = require('../controllers/produtoController');
/*** Middleware Require ***/
const upload = require('../middlewares/multer')

/***********************************************************************************************************************/

/*** Get all products ***/
router.get('/', produtoController.showAllProducts);

/*** Creat One Product ***/
router.get('/criar', produtoController.createOneProduct);
router.post('/criar', upload.single('imagem'), produtoController.storeProduct)

/*** Get One Product ***/
router.get('/detalhe/:id/', produtoController.detail);

/*** Edit One Product ***/
router.get('/editar/:id', produtoController.edit);
router.put('/editar/:id', upload.single('imagem'), produtoController.update) 

/*** Delete One Product ***/
router.delete('/deletar/:id', produtoController.delete)

module.exports = router;