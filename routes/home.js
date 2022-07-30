
const express = require("express");
const router = express.Router();


const homeController = require('../controllers/homeController');


router.get("/", homeController.index);

router.get("/sobre", homeController.about)

module.exports = router;