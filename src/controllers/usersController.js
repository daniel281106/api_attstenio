const { hash, compare } = require("bcryptjs");
const knex = require("../database/knex");

class UsersController {
    async create(req, res) {
        let { user_id, email, password } = req.body;

        const checkUserExists = await knex('users').where({ email }).first();

        if (checkUserExists) {
            return res.status(409).json({ message: 'User with this email already exists' });
        }

        const hashedPassword = await hash(password, 8);

        password = hashedPassword;

        const usersInsert = await knex('users').insert({
            email,
            password
        });

        if (!usersInsert) {
            return res.status(500).json({ message: 'Failed to create the user' });
        }

        res.send(json({ message: 'User created successfully' }));
    }
}

module.exports = UsersController;