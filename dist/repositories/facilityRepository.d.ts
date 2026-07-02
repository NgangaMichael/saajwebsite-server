import { Facility } from "../models/facility.js";
import { Transaction } from "sequelize";
export declare class FacilityRepository {
    create(payload: Partial<Facility>, trx?: Transaction | null): Promise<Facility>;
    findById(id: number): Promise<Facility | null>;
    findAll(): Promise<Facility[]>;
    update(id: number, payload: Partial<Facility>, trx?: Transaction | null): Promise<Facility | null>;
    delete(id: number, username: string, trx?: Transaction | null): Promise<Facility | null>;
}
//# sourceMappingURL=facilityRepository.d.ts.map