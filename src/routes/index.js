const { Router } = require("express");

const novelaRouter = require("./novela.routes.js")
const usersCadastroRouter = require("./usersCadastro.routes.js")
const usersLoginRouter = require("./usersLogin.routes.js")
const routes = Router();

routes.use("/novela", novelaRouter);
routes.use("/cadastro", usersCadastroRouter);
routes.use("/login", usersLoginRouter)

module.exports = routes;