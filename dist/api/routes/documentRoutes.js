// src/api/routes/documentRoutes.ts
import { Router } from 'express';
import { upload } from '../middleware/upload.js'; // import the Multer middleware
import { createDocument, getDocuments, getDocumentById, updateDocument, deleteDocument } from '../controllers/documentController.js';
const router = Router();
router.post('/', upload.single('file'), createDocument); // POST /api/documents with file upload
router.get('/', getDocuments); // GET  /api/documents
router.get('/:id', getDocumentById); // GET  /api/documents/:id
router.put('/:id', updateDocument); // PUT  /api/documents/:id
router.delete('/:id', deleteDocument); // DELETE /api/documents/:id
export default router;
//# sourceMappingURL=documentRoutes.js.map