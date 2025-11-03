// src/api/routes/transactioncodeRoutes.ts
import { Router } from 'express';
import { createTransactioncode, getTransactioncodes, getTransactioncodeById, updateTransactioncode, deleteTransactioncode } from '../controllers/transactioncodeController.js';

const router = Router();

router.post('/', createTransactioncode);       // POST /api/transactioncodes
router.get('/', getTransactioncodes);          // GET  /api/transactioncodes
router.get('/:id', getTransactioncodeById);    // GET  /api/transactioncodes/:id
router.patch('/:id', updateTransactioncode);     // PUT  /api/transactioncodes/:id
router.delete('/:id/:username', deleteTransactioncode);  // DELETE /api/transactioncodes/:id

export default router;
