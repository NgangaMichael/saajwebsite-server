// src/repositories/subcommitteeRepository.ts
import { SubCommittee } from "../models/subcommittee.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class SubCommitteeRepository {
    async create(payload, trx = null) {
        return SubCommittee.create(payload, { transaction: trx });
    }
    async findById(id) {
        return SubCommittee.findByPk(id);
    }
    async findAll() {
        return SubCommittee.findAll();
    }
    async update(id, payload, trx = null) {
        const subcommittee = await SubCommittee.findByPk(id);
        if (!subcommittee)
            return null;
        const beforeData = subcommittee.toJSON();
        const updated = await subcommittee.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "SubCommittee",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, username, trx = null) {
        const subcommittee = await SubCommittee.findByPk(id);
        if (!subcommittee)
            return null;
        const beforeData = subcommittee.getDataValue("name");
        console.log("Before Data:", beforeData);
        await subcommittee.destroy({ transaction: trx });
        await logService.logAction({
            entity: "SubCommittee",
            entityId: id,
            action: "DELETE",
            beforeData,
            performedBy: username,
        });
        return subcommittee;
    }
}
//# sourceMappingURL=subcommitteeRepositiry.js.map