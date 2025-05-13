const express = require('express');
const app = express();
const usersRoutes = require('./src/routes/users.routes');
const productsRoutes = require('./src/routes/products.routes');
const authRoutes = require('./src/routes/auth.routes');
const { verifyToken } = require('./src/middlewares/auth.middleware');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/products', verifyToken, productsRoutes);

const port = 3000;
app.listen(port, () => console.log("Servidor iniciado em: http://localhost:3000"));