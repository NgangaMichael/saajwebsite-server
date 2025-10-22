import { Leave } from "../models/leave.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class LeaveRepository {
  async create(payload: Partial<Leave>, trx: Transaction | null = null) {
    const created = await Leave.create(payload as any, { transaction: trx });
    await logService.logAction({
      entity: "Leave",
      entityId: created.id,
      action: "CREATE",
      afterData: created.toJSON(),
    });
    return created;
  }

  async findAll() {
    return Leave.findAll({ include: ["user"] });
  }

  async findByUser(userId: number) {
    return Leave.findAll({ where: { userId }, include: ["user"] });
  }

  async findById(id: number) {
    return Leave.findByPk(id, { include: ["user"] });
  }

  async update(id: number, payload: Partial<Leave>, trx: Transaction | null = null) {
    const leave = await Leave.findByPk(id);
    if (!leave) return null;

    const beforeData = leave.toJSON();
    const updated = await leave.update(payload, { transaction: trx });

    await logService.logAction({
      entity: "Leave",
      entityId: id,
      action: "UPDATE",
      beforeData,
      afterData: updated.toJSON(),
    });

    return updated;
  }

  async delete(id: number, trx: Transaction | null = null) {
    const leave = await Leave.findByPk(id);
    if (!leave) return null;

    const beforeData = leave.toJSON();
    await leave.destroy({ transaction: trx });

    await logService.logAction({
      entity: "Leave",
      entityId: id,
      action: "DELETE",
      beforeData,
    });

    return leave;
  }
}
