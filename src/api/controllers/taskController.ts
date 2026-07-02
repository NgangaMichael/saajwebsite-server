import type { Request, Response, NextFunction } from "express";
import { TaskService } from "../../services/taskService.js";

const service = new TaskService();

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await service.createTask(req.body);
    res.status(201).json({ data: task });
  } catch (err) {
    next(err);
  }
};

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { assigneeId, creatorId } = req.query;
    let tasks;

    if (assigneeId) {
      tasks = await service.listTasksByAssignee(Number(assigneeId));
    } else if (creatorId) {
      tasks = await service.listTasksByCreator(Number(creatorId));
    } else {
      tasks = await service.listTasks();
    }

    res.json({ data: tasks });
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const taskId = Number(req.params.id);
    
    // ✅ Extract user context attributes from request (adjust property path based on your auth middleware setup, e.g., req.user)
    const requestingUser = req.body.currentUser || (req as any).user;
    const userRole = requestingUser?.level; 

    // Instantiate clean payload map object
    let updatePayload: Record<string, any> = { ...req.body };

    // Clean out custom internal container object properties if appended 
    delete updatePayload.currentUser;

    if (userRole === "Level 2") {
      // 🔒 Level 2 Protection: Strip away administrative configuration parameters completely
      delete updatePayload.adminComments;
      delete updatePayload.title;
      delete updatePayload.description;
      delete updatePayload.dueDate;
      delete updatePayload.createdById;
      delete updatePayload.createdByUsername;
    } else if (userRole === "Level 3") {
      // 🔒 Level 3 Protection: Prevent overwriting fields owned by ground operators
      delete updatePayload.challengesDescription;
    } else {
      // If no valid structural corporate authorization level configuration exists, reject payload modifications
      return res.status(403).json({ message: "Unauthorized operation access permission level." });
    }

    // Pass the safe, authorized payload fields through to persistence layers
    const task = await service.updateTask(taskId, updatePayload);
    if (!task) return res.status(404).json({ message: "Task execution target not found" });
    
    res.json({ data: task });
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await service.deleteTask(Number(req.params.id));
    if (!task) return res.status(404).json({ message: "Task execution target not found" });
    res.json({ message: "Task record purged successfully", data: task });
  } catch (err) {
    next(err);
  }
};