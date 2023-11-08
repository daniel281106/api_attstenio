const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const { hash, compare } = require("bcryptjs");
const knex = require("../database/knex");
const bcrypt = require("bcryptjs");

class UsersLoginController {
  async login(req, res) {
    const { email, password } = req.body;

    knex.select('email', 'password')
      .from('users')
      .where('email', '=', email)
      .then(data => {
        if (data.length === 1) {
          const isValid = bcrypt.compareSync(password, data[0].password);
          if (isValid) {
            const token = jwt.sign({ email }, 'seuSegredo');
            res.json(token);
          } else {
            res.status(400).json('Credenciais incorretas');
          }
        } else {
          res.status(400).json('Credenciais incorretas');
        }
      })
      .catch(err => {
        console.error(err);
        res.status(400).json('Erro no login');
      });
  }
  async show(req, res) {
    const { email, password } = req.body;
    knex.select('email', 'password')
      .from('users')
      .where('email', '=', email)
    const token = jwt.sign({ email }, 'seuSegredo');
    res.json(token);


  }
};

module.exports = UsersLoginController;