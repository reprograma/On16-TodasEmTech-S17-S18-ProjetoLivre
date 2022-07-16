const express = require('express');
const router = express.Router();
const controller = require("../controller/vagasController")
 

router.get("/", controller.getAllVagas) 

module.exports = router
