import { Transactioncodes } from "../models/transactioncode.js";
import { Transaction } from "sequelize";
export declare class TransactioncodeRepository {
    create(payload: Partial<Transactioncodes>, trx?: Transaction | null): Promise<Transactioncodes>;
    findById(id: number): Promise<Transactioncodes | null>;
    findAll(): Promise<Transactioncodes[]>;
    update(id: number, payload: Partial<Transactioncodes>, trx?: Transaction | null): Promise<Transactioncodes | null>;
    delete(id: number, username: string, trx?: Transaction | null): Promise<Transactioncodes | null>;
}
//# sourceMappingURL=transactionRepository.d.ts.map