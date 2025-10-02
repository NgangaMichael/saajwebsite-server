// src/api/routes/communicationRoutes.ts
import { Router } from 'express';
import { createCommunication, getCommunications, getCommunicationById, updateCommunication, deleteCommunication } from '../controllers/communicationController.js';
const router = Router();
router.post('/', createCommunication); // POST /api/communications
router.get('/', getCommunications); // GET  /api/communications
router.get('/:id', getCommunicationById); // GET  /api/communications/:id
router.patch('/:id', updateCommunication); // PATCH /api/communications/:id
router.delete('/:id', deleteCommunication); // DELETE /api/communications/:id
export default router;
//# sourceMappingURL=communicationRoutes.js.map