const { Router } = require("express");

const UserLogin = require("../controllers/usersloginController")

const usersLogin = new UserLogin()

const usersLoginRouter = Router();

usersLoginRouter.post("/", usersLogin.login)




module.exports = usersLoginRouter