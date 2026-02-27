import { Model } from "sequelize-typescript";
import { User } from "./user.js";
export declare class Leave extends Model<Leave> {
    userId: number;
    user: User;
    leaveType: string;
    startDate: string;
    endDate: string;
    reason: string | null;
    days: number | 0;
    status: string;
    approvedBy: string | null;
}
//# sourceMappingURL=leave.d.ts.map