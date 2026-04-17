// src/api/routes/serviceRoutes.ts
import { Router } from 'express';
import { upload } from '../middleware/upload.js';
import { createService, getServices, getServiceById, updateService, deleteService } from '../controllers/serviceController.js';
const router = Router();
router.post('/', upload.single('file'), createService);
router.get('/', getServices); // GET  /api/services
router.get('/:id', getServiceById); // GET  /api/services/:id
router.patch('/:id', upload.single('file'), updateService);
router.delete('/:id/:username', deleteService); // DELETE /api/services/:id
export default router;
//# sourceMappingURL=serviceRoutes.js.map