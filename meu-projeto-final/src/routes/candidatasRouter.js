const express = require('express');
const router = express.Router();
const controller = require("../controller/candidatasController")
 
router.get("/buscar", controller.allEmpresas) 
router.post("/", controller.registerNewCandidata)
router.patch("/alterar/:id", controller.alterarCandidatas)
router.delete ("/deletar/:id", controller.deletarCandidata)

module.exports = router

