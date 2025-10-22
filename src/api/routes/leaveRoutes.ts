import { Router } from "express";
import {
  applyLeave,
  getLeaves,
  getLeavesByUser,
  updateLeave,
  deleteLeave,
} from "../controllers/leaveController.js";

const router = Router();

router.post("/", applyLeave);              // POST /api/leaves
router.get("/", getLeaves);                // GET /api/leaves
router.get("/user/:userId", getLeavesByUser); // GET /api/leaves/user/2
router.patch("/:id", updateLeave);         // PATCH /api/leaves/5
router.delete("/:id", deleteLeave);        // DELETE /api/leaves/5

export default router;
