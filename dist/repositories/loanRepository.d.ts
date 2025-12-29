import { Loan } from "../models/loan.js";
import { Transaction } from "sequelize";
export declare class LoanRepository {
    create(payload: Partial<Loan>, trx?: Transaction | null): Promise<Loan>;
    findAll(): Promise<Loan[]>;
    findByUser(userId: number): Promise<Loan[]>;
    findById(id: number): Promise<Loan | null>;
    update(id: number, payload: Partial<Loan>, trx?: Transaction | null): Promise<Loan | null>;
    delete(id: number, trx?: Transaction | null): Promise<Loan | null>;
}
//# sourceMappingURL=loanRepository.d.ts.map