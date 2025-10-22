import { Leave } from "../models/leave.js";
import { Transaction } from "sequelize";
export declare class LeaveRepository {
    create(payload: Partial<Leave>, trx?: Transaction | null): Promise<Leave>;
    findAll(): Promise<Leave[]>;
    findByUser(userId: number): Promise<Leave[]>;
    findById(id: number): Promise<Leave | null>;
    update(id: number, payload: Partial<Leave>, trx?: Transaction | null): Promise<Leave | null>;
    delete(id: number, trx?: Transaction | null): Promise<Leave | null>;
}
//# sourceMappingURL=leaveRepository.d.ts.map