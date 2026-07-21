// src/api/routes/communicationRoutes.ts
import { Router } from 'express';
import {
  createCommunication,
  getCommunications,
  getCommunicationById,
  updateCommunication,
  deleteCommunication,
  getThread
} from '../controllers/communicationController.js';
import { upload } from '../middleware/upload.js';

const router = Router();

router.post('/', upload.array('attachments', 5), createCommunication);
router.get('/', getCommunications);
router.get('/:id', getCommunicationById);
router.patch('/:id', upload.array('attachments', 5), updateCommunication);
router.get('/thread/:id', getThread);
router.delete('/:id/:username', deleteCommunication);

export default router;