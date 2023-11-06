


exports.up = knex=> knex.schema.createTable('users', table =>{
    table.increments("user_id");
    table.text("email").notNullable();
    table.text("password").notNullable();
}) ;


exports.down = knex=> knex.schema.dropTable('users');
