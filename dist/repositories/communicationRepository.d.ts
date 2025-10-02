import { Communication } from "../models/communication.js";
import { Transaction } from "sequelize";
export declare class CommunicationRepository {
    create(payload: Partial<Communication>, trx?: Transaction | null): Promise<Communication>;
    findById(id: number): Promise<Communication | null>;
    findAll(): Promise<Communication[]>;
    update(id: number, payload: Partial<Communication>, trx?: Transaction | null): Promise<Communication | null>;
    delete(id: number, trx?: Transaction | null): Promise<Communication | null>;
}
//# sourceMappingURL=communicationRepository.d.ts.map