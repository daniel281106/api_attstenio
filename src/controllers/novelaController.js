const knex = require("../database/knex")


class novelaController{
    async create(req, res){
        const { nome_novela, 
            data_primeiro_capitulo,
            data_ultimo_capitulo,
            horario_exibicao } = req.body

            
        const novelainsert = await knex("novela").insert({
            nome_novela,
            data_primeiro_capitulo,
            data_ultimo_capitulo,
            horario_exibicao
        })
        console.log(req)
        res.json();
    }
}
module.exports = novelaController;