import { Router } from "express";
import { createSurvey, getSurveys, submitResponse } from "../controllers/surveyController.js";
const router = Router();
router.post("/", createSurvey); // For Admin
router.get("/", getSurveys); // For Members (shows if they already responded)
router.post("/respond", submitResponse); // For Members to submit
export default router;
//# sourceMappingURL=surveyRoutes.js.map