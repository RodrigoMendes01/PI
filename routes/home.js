const express = require("express");
const router = express.Router();
const homeController = require('../controllers/homeController');
const sobreController = require("../controllers/sobreController");
const cadastroController = require('../controllers/cadastroController')

router.get("/", homeController.index);

router.get("/sobre", sobreController.index)

router.get("/cadastrar", cadastroController.index )

module.exports = router;