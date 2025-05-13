const db = require('../database/connection'); 

module.exports = {
    async listarObjetos(request, response) {
        try {

            const sql = `
              SELECT obj_id, categ_id, usu_id, obj_descricao, obj_foto, obj_local_encontrado, obj_data_publicacao, obj_status, obj_encontrado = 1 AS usu_ativo
              FROM objetos;  
            `;

            const [rows] = await db.query(sql);
        
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de objetos', 
                itens: rows.lenght,
                dados: rows,
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarObjetos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de objetos', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarObjetos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de objetos', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarObjetos(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de objetos', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  