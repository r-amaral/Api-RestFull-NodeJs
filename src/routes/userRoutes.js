import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router
    .get('/api/v1/users', UserController.listUser)
    .get('/api/v1/users/:id', UserController.listUserById)


export default router;