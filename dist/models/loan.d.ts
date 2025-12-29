import { Model } from "sequelize-typescript";
import { User } from "./user.js";
export declare class Loan extends Model<Loan> {
    userId: number;
    user: User;
    amount: number;
    purpose: string;
    repaymentMonths: number;
    reason: string | null;
    status: string;
    approvedBy: string | null;
}
//# sourceMappingURL=loan.d.ts.map