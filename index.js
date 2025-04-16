const express = require('express');
const app = express();
const usersRoutes = require('./src/routes/users.routes');

app.use(express.json());
app.use('/users', usersRoutes);

const port = 3000;
app.listen(port, () => console.log("Servidor iniciado em: http://localhost:3000"));