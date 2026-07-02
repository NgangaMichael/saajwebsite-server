import { TaskRepository } from "../repositories/taskRepository.js";
export declare class TaskService {
    repo: TaskRepository;
    createTask(data: any): Promise<import("../models/task.js").Task>;
    listTasks(): Promise<import("../models/task.js").Task[]>;
    listTasksByAssignee(assigneeId: number): Promise<import("../models/task.js").Task[]>;
    listTasksByCreator(creatorId: number): Promise<import("../models/task.js").Task[]>;
    updateTask(id: number, data: any): Promise<import("../models/task.js").Task | null>;
    deleteTask(id: number): Promise<import("../models/task.js").Task | null>;
}
//# sourceMappingURL=taskService.d.ts.map