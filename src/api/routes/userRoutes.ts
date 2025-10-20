import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser  } from '../controllers/userController.js';

const router = Router();

router.post('/', createUser);       // POST /api/users
router.get('/', getUsers);          // GET  /api/users
router.get('/:id', getUserById);    // GET  /api/users/1
router.patch('/:id', updateUser);     // PUT  /api/users/1
router.delete('/:id/:username', deleteUser);  // DELETE /api/users/1

export default router;
