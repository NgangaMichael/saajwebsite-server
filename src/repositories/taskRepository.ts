import { Task } from "../models/task.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class TaskRepository {
  async create(payload: Partial<Task>, trx: Transaction | null = null) {
    const created = await Task.create(payload as any, { transaction: trx });
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

  async findByAssignee(assigneeId: number) {
    return Task.findAll({ where: { assigneeId }, order: [["createdAt", "DESC"]] });
  }

  async findByCreator(createdById: number) {
    return Task.findAll({ where: { createdById }, order: [["createdAt", "DESC"]] });
  }

  async findById(id: number) {
    return Task.findByPk(id);
  }

  async update(id: number, payload: Partial<Task>, trx: Transaction | null = null) {
    const task = await Task.findByPk(id);
    if (!task) return null;

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

  async delete(id: number, trx: Transaction | null = null) {
    const task = await Task.findByPk(id);
    if (!task) return null;

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