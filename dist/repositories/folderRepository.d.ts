import { Folder } from "../models/folders.js";
import { Transaction } from "sequelize";
export declare class FolderRepository {
    create(payload: Partial<Folder>, trx?: Transaction | null): Promise<Folder>;
    findById(id: number): Promise<Folder | null>;
    findAll(): Promise<Folder[]>;
    update(id: number, payload: Partial<Folder>, trx?: Transaction | null): Promise<Folder | null>;
    delete(id: number, username: string, trx?: Transaction | null): Promise<Folder | null>;
}
//# sourceMappingURL=folderRepository.d.ts.map