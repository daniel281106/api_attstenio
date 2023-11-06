const { Router } = require("express");

const UsersController = require("../controllers/usersController.js")

const usersController = new UsersController();

const usersRoutes = Router();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/", usersController.showUsers)

module.exports = usersRoutes;