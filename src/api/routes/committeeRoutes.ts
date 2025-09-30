// src/api/routes/committeeRoutes.ts
import { Router } from 'express';
import { createCommittee, getCommittees, getCommitteeById, updateCommittee, deleteCommittee } from '../controllers/committeeController.js';

const router = Router();

router.post('/', createCommittee);       // POST /api/committees
router.get('/', getCommittees);          // GET  /api/committees
router.get('/:id', getCommitteeById);    // GET  /api/committees/:id
router.patch('/:id', updateCommittee);     // PUT  /api/committees/:id
router.delete('/:id', deleteCommittee);  // DELETE /api/committees/:id

export default router;
