import { Router } from "express";
import {
  applyLoan,
  getLoans,
  getLoansByUser,
  updateLoan,
  deleteLoan,
} from "../controllers/loanController.js";

const router = Router();

router.post("/", applyLoan);                    // POST /api/loans
router.get("/", getLoans);                      // GET /api/loans
router.get("/user/:userId", getLoansByUser);    // GET /api/loans/user/2
router.patch("/:id", updateLoan);               // PATCH /api/loans/5
router.delete("/:id", deleteLoan);              // DELETE /api/loans/5

export default router;