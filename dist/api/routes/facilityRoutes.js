import { Router } from 'express';
import { createFacility, getFacilities, getFacilityById, updateFacility, deleteFacility } from '../controllers/facilityController.js';
const router = Router();
router.post('/', createFacility); // POST /api/facilities
router.get('/', getFacilities); // GET  /api/facilities
router.get('/:id', getFacilityById); // GET  /api/facilities/:id
router.patch('/:id', updateFacility); // PATCH /api/facilities/:id
router.delete('/:id/:username', deleteFacility); // DELETE /api/facilities/:id/:username
export default router;
//# sourceMappingURL=facilityRoutes.js.map