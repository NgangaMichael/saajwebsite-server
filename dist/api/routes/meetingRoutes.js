import { Router } from "express";
import { createMeeting, getMeetings, updateMeeting, deleteMeeting } from "../controllers/meetingController.js";
const router = Router();
router.post("/", createMeeting); // POST /api/meetings (Level 3 only)
router.get("/", getMeetings); // GET /api/meetings?creatorId=X
router.patch("/:id", updateMeeting); // PATCH /api/meetings/:id (Level 3 only - edit or mark Completed)
router.delete("/:id", deleteMeeting); // DELETE /api/meetings/:id (Level 3 only)
export default router;
//# sourceMappingURL=meetingRoutes.js.map