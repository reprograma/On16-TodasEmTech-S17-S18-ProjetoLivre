const express = require("express");
const router = express.Router();
const controller = require("../controller/empresaController");

router.get("/",controller.allCandidatas);
router.post("/vaga", controller.registerNewVaga)
router.post("/registrar", controller.registerNewEmpresa);
router.post("/login", controller.loginEmpresa);

module.exports = router;


