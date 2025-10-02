import { Log } from "../models/log.js";
import { Transaction } from "sequelize";
export declare class LogRepository {
    create(payload: Partial<Log>, trx?: Transaction | null): Promise<Log>;
}
//# sourceMappingURL=logRepository.d.ts.map