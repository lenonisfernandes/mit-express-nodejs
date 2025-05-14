const jwt = require('jsonwebtoken');
const { SECRET } = require('../services/auth.service');
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../data/auth.log');

const logUser = (user) => {
    const logEntry = `[${new Date().toISOString()}] User ID: {${user.id}}, Username ${user.username}\n`;
    fs.appendFile(logFilePath, logEntry, (error) => {
        if(error) {
            console.error("Error ao gravar o log da autenticação: " + error.message);
        }
    });
}

const verifyToken = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader) {
        response.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, SECRET);
        logUser(decoded)
        request.user = decoded;
        next();
    } catch (error) {
        return response.status(401).json( { error: 'Token inválido ou expirado. '});
    }

}

module.exports = {
    verifyToken
}