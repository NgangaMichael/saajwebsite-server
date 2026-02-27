import { Service } from "../models/service.js";
import { Transaction } from "sequelize";
export declare class ServiceRepository {
    create(payload: Partial<Service>, trx?: Transaction | null): Promise<Service>;
    findById(id: number): Promise<Service | null>;
    findAll(): Promise<Service[]>;
    update(id: number, payload: Partial<Service>, trx?: Transaction | null): Promise<Service | null>;
    delete(id: number, username: string, trx?: Transaction | null): Promise<Service | null>;
}
//# sourceMappingURL=serviceRepository.d.ts.map