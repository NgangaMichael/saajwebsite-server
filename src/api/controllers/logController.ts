import type { Request, Response } from "express";
import { Log } from "../../models/log.js";

export class LogController {
  // GET /logs
  async getAllLogs(req: Request, res: Response): Promise<void> {
    try {
      const logs = await Log.findAll({
        order: [["createdAt", "DESC"]], // newest first
      });
      res.json(logs);
    } catch (err) {
      console.error("Error fetching logs:", err);
      res.status(500).json({ message: "Failed to fetch logs" });
    }
  }

  // GET /logs/:id
  async getLogById(req: Request, res: Response): Promise<void> {
    try {
      const log = await Log.findByPk(req.params.id);
      if (!log) {
        res.status(404).json({ message: "Log not found" });
        return;
      }
      res.json(log);
    } catch (err) {
      console.error("Error fetching log:", err);
      res.status(500).json({ message: "Failed to fetch log" });
    }
  }
}
