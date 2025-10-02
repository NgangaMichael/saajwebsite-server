// src/repositories/logRepository.ts
import { Log } from "../models/log.js";
import { Transaction } from "sequelize";
export class LogRepository {
    async create(payload, trx = null) {
        return Log.create(payload, { transaction: trx });
    }
}
//# sourceMappingURL=logRepository.js.map