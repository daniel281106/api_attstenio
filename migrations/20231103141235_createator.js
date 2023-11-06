
exports.up = knex=> knex.schema.createTable("ator", table =>{
    table.increments("codigo_ator");
    table.text("nome_ator").notNullable();
    table.mediumint("idade_ator").notNullable();
    table.text("cidade_ator").notNullable();
    table.float("salario", [8], [2]);
    table.text("genero").notNullable();
});

exports.down = knex => knex.schema.dropTable('ator');
