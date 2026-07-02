import { Task } from "../models/task.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class TaskRepository {
    async create(payload, trx = null) {
        const created = await Task.create(payload, { transaction: trx });
        await logService.logAction({
            entity: "Task",
            entityId: created.id,
            action: "CREATE",
            afterData: created.toJSON(),
        });
        return created;
    }
    async findAll() {
        return Task.findAll({ order: [["createdAt", "DESC"]] });
    }
    async findByAssignee(assigneeId) {
        return Task.findAll({ where: { assigneeId }, order: [["createdAt", "DESC"]] });
    }
    async findByCreator(createdById) {
        return Task.findAll({ where: { createdById }, order: [["createdAt", "DESC"]] });
    }
    async findById(id) {
        return Task.findByPk(id);
    }
    async update(id, payload, trx = null) {
        const task = await Task.findByPk(id);
        if (!task)
            return null;
        const beforeData = task.toJSON();
        const updated = await task.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Task",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, trx = null) {
        const task = await Task.findByPk(id);
        if (!task)
            return null;
        const beforeData = task.toJSON();
        await task.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Task",
            entityId: id,
            action: "DELETE",
            beforeData,
        });
        return task;
    }
}
//# sourceMappingURL=taskRepository.js.map