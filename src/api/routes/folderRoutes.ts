// src/api/routes/folderRoutes.ts
import { Router } from 'express';
import { createFolder, getFolders, getFolderById, updateFolder, deleteFolder } from '../controllers/folderController.js';

const router = Router();

router.post('/', createFolder);       // POST /api/folders
router.get('/', getFolders);          // GET  /api/folders
router.get('/:id', getFolderById);    // GET  /api/folders/:id
router.patch('/:id', updateFolder);     // PUT  /api/folders/:id
router.delete('/:id/:username', deleteFolder);  // DELETE /api/cfolder/:id

export default router;
