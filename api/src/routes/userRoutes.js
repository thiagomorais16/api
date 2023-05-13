const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

// sempre que alguem bater no endpoint / vai direcionar pro arquivo UserController na função getUsers()
router.get('/', userController.getUsers);
router.get('/:id', userController.getOneUser);
router.post('/', userController.postUser);


module.exports = router;