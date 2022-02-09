import {Router} from 'express';
const router = Router();

import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/index.controller';

router.get('/users', getUsers);
router.get('/get-user/:id', getUserById);
router.post('/add-users', createUser);
router.put('/update-users/:id', updateUser)
router.delete('/users/:id', deleteUser);

export default router;