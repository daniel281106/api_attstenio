
exports.up = knex => knex.schema.createTable("capitulos", table =>{
    table.increments("codigo_capitulo");
    table.text("nome_capitulo").notNullable();
    table.date("data_exibicao");
    table.integer("codigo_novela").references("codigo_novela").inTable("novela").onDelete().onUpdate();
});


exports.down = knex=> knex.schema.dropTable("capitulos");
