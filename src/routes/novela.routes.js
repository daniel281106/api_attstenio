const { Router } = require("express");

const NovelaController = require("../controllers/novelaController.js")

const novelaController = new NovelaController();

const novelaRoutes = Router();

novelaRoutes.post("/", novelaController.create);

module.exports = novelaRoutes;