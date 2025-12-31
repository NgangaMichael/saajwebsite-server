import { Router } from "express";
import {
  createSurvey,
  getSurveys,
  submitResponse,
  getSurveyById,
  getSurveyAnalytics
} from "../controllers/surveyController.js";

const router = Router();

router.post("/", createSurvey);
router.get("/", getSurveys);
router.get("/:id", getSurveyById);
router.post("/respond", submitResponse);
router.get("/:id/analytics", getSurveyAnalytics);

export default router;
