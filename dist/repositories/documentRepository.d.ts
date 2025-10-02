import { Document } from "../models/document.js";
import { Transaction } from "sequelize";
export declare class DocumentRepository {
    create(payload: Partial<Document>, trx?: Transaction | null): Promise<Document>;
    findById(id: number): Promise<Document | null>;
    findAll(): Promise<Document[]>;
    update(id: number, payload: Partial<Document>, trx?: Transaction | null): Promise<Document | null>;
    delete(id: number, trx?: Transaction | null): Promise<Document | null>;
}
//# sourceMappingURL=documentRepository.d.ts.map