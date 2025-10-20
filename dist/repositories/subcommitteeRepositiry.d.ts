import { SubCommittee } from "../models/subcommittee.js";
import { Transaction } from "sequelize";
export declare class SubCommitteeRepository {
    create(payload: Partial<SubCommittee>, trx?: Transaction | null): Promise<SubCommittee>;
    findById(id: number): Promise<SubCommittee | null>;
    findAll(): Promise<SubCommittee[]>;
    update(id: number, payload: Partial<SubCommittee>, trx?: Transaction | null): Promise<SubCommittee | null>;
    delete(id: number, username: string, trx?: Transaction | null): Promise<SubCommittee | null>;
}
//# sourceMappingURL=subcommitteeRepositiry.d.ts.map