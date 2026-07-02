import { Facility } from "../models/facility.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class FacilityRepository {
    async create(payload, trx = null) {
        return Facility.create(payload, { transaction: trx });
    }
    async findById(id) {
        return Facility.findByPk(id);
    }
    async findAll() {
        return Facility.findAll({ order: [["name", "ASC"]] });
    }
    async update(id, payload, trx = null) {
        const facility = await Facility.findByPk(id);
        if (!facility)
            return null;
        const beforeData = facility.toJSON();
        const updated = await facility.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Facility",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, username, trx = null) {
        const facility = await Facility.findByPk(id);
        if (!facility)
            return null;
        const beforeData = facility.toJSON();
        await facility.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Facility",
            entityId: id,
            action: "DELETE",
            beforeData,
            performedBy: username,
        });
        return facility;
    }
}
//# sourceMappingURL=facilityRepository.js.map