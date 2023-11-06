
exports.up = knex=> knex.schema.createTable("personagemnovela", table =>{
    table.integer("codigo_novela").references("codigo_novela").inTable("novela").onDelete().onUpdate()
    table.integer("codigo_personagem").references("codigo_personagem").inTable("personagens").onDelete().onUpdate()
});
exports.down = knex => knex.schema.dropTable("personagemnovela");
