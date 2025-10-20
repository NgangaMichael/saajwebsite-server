// src/api/routes/subcommitteeRoutes.ts
import { Router } from 'express';
import { createsubCommittee, getsubCommittees, getsubCommitteeById, updatesubCommittee, deletesubCommittee } from '../controllers/subcomitteeController.js';
const router = Router();
router.post('/', createsubCommittee); // POST /api/subcommittees
router.get('/', getsubCommittees); // GET  /api/subcommittees
router.get('/:id', getsubCommitteeById); // GET  /api/subcommittees/:id
router.patch('/:id', updatesubCommittee); // PUT  /api/subcommittees/:id
router.delete('/:id/:username', deletesubCommittee); // DELETE /api/subcommittees/:id
export default router;
//# sourceMappingURL=subcommitteeRoutes.js.map