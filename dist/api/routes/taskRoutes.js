import { Router } from "express";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js";
const router = Router();
router.post("/", createTask); // POST /api/tasks
router.get("/", getTasks); // GET /api/tasks?assigneeId=X or ?creatorId=Y
router.patch("/:id", updateTask); // PATCH /api/tasks/:id (Handles setting status to Completed or Challenges)
router.delete("/:id", deleteTask); // DELETE /api/tasks/:id
export default router;
//# sourceMappingURL=taskRoutes.js.map