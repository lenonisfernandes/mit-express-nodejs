require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors');
const usersRoutes = require('./src/routes/users.routes');
const productsRoutes = require('./src/routes/products.routes');
const authRoutes = require('./src/routes/auth.routes');

const { verifyToken } = require('./src/middlewares/auth.middleware');
const { logRequest } = require('./src/middlewares/log.middleware');
const { limiter } = require('./src/middlewares/limiter.middleware');

app.use(express.json());
app.use(logRequest);
app.use(limiter)
app.use(cors())

//public routes
app.use('/auth', authRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//private routes
app.use('/users', verifyToken, usersRoutes);
app.use('/products', verifyToken, productsRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log("Servidor iniciado em: http://localhost:"+port));