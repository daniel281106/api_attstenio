const knex = require("knex");

exports.up = knex => knex.schema.createTable("personagens", table =>{
    table.increments("codigo_personagem");
    table.text("nome_personagem").notNullable();
    table.mediumint("idade_personagem").notNullable();
    table.text("situacao_personagem").notNullable();
    table.integer("codigo_ator").references("codigo_ator").inTable("ator").onDelete().onUpdate()

});

exports.down = knex => knex.dropTable("personagens");
