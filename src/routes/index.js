const { Router } = require("express");

const novelaRouter = require("./novela.routes.js")
const usersRouter = require("./users.routes")

const routes = Router();

routes.use("/novela", novelaRouter);
routes.use("/users", usersRouter);

module.exports = routes;