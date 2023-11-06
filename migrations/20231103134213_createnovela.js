
exports.up = knex => knex.schema.createTable("novela", table =>{
    table.increments("codigo_novela");
    table.text("nome_novela").notNullable();
    table.date("data_primeiro_capitulo");
    table.date("data_ultimo_capitulo");
    table.time('horario_exibicao', { precision: 6 });
});

exports.down = knex => knex.schema.dropTable('novela');
