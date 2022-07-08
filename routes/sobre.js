const express = require("express");
const router = express.Router();
const SobreController = require('../controllers/SobreController');


router.get('/', SobreController.index);

module.exports = router