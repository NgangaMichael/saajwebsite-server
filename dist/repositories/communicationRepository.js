// src/repositories/communicationRepository.ts
import { Communication } from "../models/communication.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class CommunicationRepository {
    async create(payload, trx = null) {
        const created = await Communication.create(payload, { transaction: trx });
        await logService.logAction({
            entity: "Communication",
            entityId: created.id,
            action: "CREATE",
            afterData: created.toJSON(),
        });
        return created;
    }
    async findById(id) {
        return Communication.findByPk(id);
    }
    async findAll() {
        return Communication.findAll();
    }
    async update(id, payload, trx = null) {
        const comm = await Communication.findByPk(id);
        if (!comm)
            return null;
        const beforeData = comm.toJSON();
        const updated = await comm.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Communication",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, trx = null) {
        const comm = await Communication.findByPk(id);
        if (!comm)
            return null;
        const beforeData = comm.toJSON();
        await comm.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Communication",
            entityId: id,
            action: "DELETE",
            beforeData,
        });
        return comm;
    }
}
//# sourceMappingURL=communicationRepository.js.map