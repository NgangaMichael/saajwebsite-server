import { Meeting } from "../models/meeting.js";
import { Transaction } from "sequelize";
export declare class MeetingRepository {
    create(payload: Partial<Meeting>, trx?: Transaction | null): Promise<Meeting>;
    findAll(): Promise<Meeting[]>;
    findByCreator(createdById: number): Promise<Meeting[]>;
    findById(id: number): Promise<Meeting | null>;
    update(id: number, payload: Partial<Meeting>, trx?: Transaction | null): Promise<Meeting | null>;
    delete(id: number, trx?: Transaction | null): Promise<Meeting | null>;
}
//# sourceMappingURL=meetingRepository.d.ts.map