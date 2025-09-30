import { Committee } from '../models/committee.js';
import { Transaction } from 'sequelize';
export declare class CommitteeRepository {
    create(payload: Partial<Committee>, trx?: Transaction | null): Promise<Committee>;
    findById(id: number): Promise<Committee | null>;
    findAll(): Promise<Committee[]>;
    update(id: number, payload: Partial<Committee>, trx?: Transaction | null): Promise<Committee | null>;
    delete(id: number, trx?: Transaction | null): Promise<Committee | null>;
}
//# sourceMappingURL=committeeRepository.d.ts.map