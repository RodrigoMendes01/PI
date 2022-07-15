const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/cadastro', userController.index);

router.get('/cadastro2', userController.show);

router.get('/perfil', userController.display);

module.exports = router;

