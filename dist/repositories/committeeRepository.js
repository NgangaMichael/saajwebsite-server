// src/repositories/committeeRepository.ts
import { Committee } from "../models/committee.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class CommitteeRepository {
    async create(payload, trx = null) {
        return Committee.create(payload, { transaction: trx });
    }
    async findById(id) {
        return Committee.findByPk(id);
    }
    async findAll() {
        return Committee.findAll();
    }
    async update(id, payload, trx = null) {
        const committee = await Committee.findByPk(id);
        if (!committee)
            return null;
        const beforeData = committee.toJSON();
        const updated = await committee.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Committee",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, username, trx = null) {
        const committee = await Committee.findByPk(id);
        if (!committee)
            return null;
        const beforeData = committee.getDataValue("name");
        console.log("Before Data:", beforeData);
        await committee.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Committee",
            entityId: id,
            action: "DELETE",
            beforeData,
            performedBy: username,
        });
        return committee;
    }
}
//# sourceMappingURL=committeeRepository.js.map