import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router
    .get('/api/v1/users', UserController.listUser)
    .get('/api/v1/users/:id', UserController.listUserById)
    .post('/api/v1/users', UserController.registerUser)
    .put('/api/v1/:id', UserController.updateUser)
    .delete('/api/v1/:id', UserController.deleteUser)

export default router;