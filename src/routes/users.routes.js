const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

//localhost:3000/users/
router.get('/', usersController.getAllUsers);
router.post('/', usersController.createUser);

module.exports = router;