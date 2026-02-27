// src/api/routes/serviceRoutes.ts
import { Router } from 'express';
import { createService, getServices, getServiceById, updateService, deleteService } from '../controllers/serviceController.js';

const router = Router();

router.post('/', createService);       // POST /api/services
router.get('/', getServices);          // GET  /api/services
router.get('/:id', getServiceById);    // GET  /api/services/:id
router.patch('/:id', updateService);     // PUT  /api/services/:id
router.delete('/:id/:username', deleteService);  // DELETE /api/services/:id

export default router;
