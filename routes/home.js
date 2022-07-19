const express = require("express");
const router = express.Router();
const homeController = require('../controllers/homeController');
const sobreController = require("../controllers/sobreController");

router.get("/", homeController.index);
router.get("/sobre", sobreController.index)

module.exports = router;