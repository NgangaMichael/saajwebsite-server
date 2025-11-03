// src/repositories/transactionRepository.ts
import { Transactioncodes } from "../models/transactioncode.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class TransactioncodeRepository {
    async create(payload, trx = null) {
        return Transactioncodes.create(payload, { transaction: trx });
    }
    async findById(id) {
        return Transactioncodes.findByPk(id);
    }
    async findAll() {
        return Transactioncodes.findAll();
    }
    async update(id, payload, trx = null) {
        const transactioncode = await Transactioncodes.findByPk(id);
        if (!transactioncode)
            return null;
        const beforeData = transactioncode.toJSON();
        const updated = await transactioncode.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Transactioncodes",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, username, trx = null) {
        const transactioncode = await Transactioncodes.findByPk(id);
        if (!transactioncode)
            return null;
        await transactioncode.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Transactioncodes",
            entityId: id,
            action: "DELETE",
            performedBy: username
        });
        return transactioncode;
    }
}
//# sourceMappingURL=transactionRepository.js.map