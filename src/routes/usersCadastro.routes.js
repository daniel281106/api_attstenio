const { Router } = require("express");

const UsersController = require("../controllers/userscadastroController.js")

const userscadastroController = new UsersController();

const usersCadastroRoutes = Router();

usersCadastroRoutes.post("/", userscadastroController.create);
usersCadastroRoutes.get("/", userscadastroController.show);

module.exports = usersCadastroRoutes;