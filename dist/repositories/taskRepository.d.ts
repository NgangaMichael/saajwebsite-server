import { Task } from "../models/task.js";
import { Transaction } from "sequelize";
export declare class TaskRepository {
    create(payload: Partial<Task>, trx?: Transaction | null): Promise<Task>;
    findAll(): Promise<Task[]>;
    findByAssignee(assigneeId: number): Promise<Task[]>;
    findByCreator(createdById: number): Promise<Task[]>;
    findById(id: number): Promise<Task | null>;
    update(id: number, payload: Partial<Task>, trx?: Transaction | null): Promise<Task | null>;
    delete(id: number, trx?: Transaction | null): Promise<Task | null>;
}
//# sourceMappingURL=taskRepository.d.ts.map