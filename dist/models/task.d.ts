import { Model } from "sequelize-typescript";
export declare class Task extends Model<Task> {
    createdById: number;
    createdByUsername: string;
    assigneeId: number;
    assigneeUsername: string;
    title: string;
    description: string;
    dueDate: string;
    reminderAt: Date | null;
    status: string;
    challengesDescription: string | null;
    adminComments: string | null;
}
//# sourceMappingURL=task.d.ts.map