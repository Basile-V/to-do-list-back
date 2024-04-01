const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

function createUserRoutes(userController) {
    router.post('/user', userController.createUser.bind(userController));
    router.get('/users', userController.getAllUsers.bind(userController));
    router.get('/user/:user_id', userController.getUserById.bind(userController));

    return router;
}

module.exports = createUserRoutes;
