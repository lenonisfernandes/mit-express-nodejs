const usersModel = require('../models/users.model.js');

const getAllUsers = async (request, response) =>  {
    try {
        const users = await usersModel.getUsers();

        if(!users || users.lenght === 0) {
            return response.status(404).json({message: 'usuários não encontrados'});
        }
        
        return response.status(200).json(users);
        
    } catch (error) {
        console.error(error);
        response.status(500).json({message: 'Erro interno do servidor: ' + error.message});
    }
}

module.exports = {
    getAllUsers
}
