const express = require("express");
const router = express.Router();
const homeController = require('../controllers/homeController');
const sobreController = require("../controllers/sobreController");

router.get("/", homeController.index);
router.get("/sobre", sobreController.index)
router.get("/cadastrar", (req, res) => {
  res.render("cadastrarProduto")
})

module.exports = router;