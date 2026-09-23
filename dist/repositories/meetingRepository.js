import { Meeting } from "../models/meeting.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class MeetingRepository {
    async create(payload, trx = null) {
        const created = await Meeting.create(payload, { transaction: trx });
        await logService.logAction({
            entity: "Meeting",
            entityId: created.id,
            action: "CREATE",
            afterData: created.toJSON(),
        });
        return created;
    }
    async findAll() {
        return Meeting.findAll({ order: [["dateTime", "ASC"]] });
    }
    async findByCreator(createdById) {
        return Meeting.findAll({ where: { createdById }, order: [["dateTime", "ASC"]] });
    }
    async findById(id) {
        return Meeting.findByPk(id);
    }
    async update(id, payload, trx = null) {
        const meeting = await Meeting.findByPk(id);
        if (!meeting)
            return null;
        const beforeData = meeting.toJSON();
        const updated = await meeting.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Meeting",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, trx = null) {
        const meeting = await Meeting.findByPk(id);
        if (!meeting)
            return null;
        const beforeData = meeting.toJSON();
        await meeting.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Meeting",
            entityId: id,
            action: "DELETE",
            beforeData,
        });
        return meeting;
    }
}
//# sourceMappingURL=meetingRepository.js.map