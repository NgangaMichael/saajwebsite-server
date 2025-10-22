import { LeaveRepository } from "../repositories/leaveRepository.js";
export declare class LeaveService {
    repo: LeaveRepository;
    createLeave(data: any): Promise<import("../models/leave.js").Leave>;
    listLeaves(): Promise<import("../models/leave.js").Leave[]>;
    listLeavesByUser(userId: number): Promise<import("../models/leave.js").Leave[]>;
    updateLeave(id: number, data: any): Promise<import("../models/leave.js").Leave | null>;
    deleteLeave(id: number): Promise<import("../models/leave.js").Leave | null>;
}
//# sourceMappingURL=leaveService.d.ts.map