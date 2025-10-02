import { Router } from "express";
import { LogController } from "../controllers/logController.js";

const router = Router();
const controller = new LogController();

router.get("/", (req, res) => controller.getAllLogs(req, res));
router.get("/:id", (req, res) => controller.getLogById(req, res));

export default router;
