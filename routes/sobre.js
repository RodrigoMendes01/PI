const express = require("express");
const router = express.Router();
const sobreController = require('../controllers/sobreController');


router.get('/', sobreController.index);

module.exports = router