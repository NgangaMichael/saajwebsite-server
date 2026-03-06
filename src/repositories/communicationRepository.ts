// src/repositories/communicationRepository.ts
import { Communication } from "../models/communication.js";
import { Transaction, Op } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class CommunicationRepository {
  async create(payload: Partial<Communication>, trx: Transaction | null = null) {
    const created = await Communication.create(payload as any, { transaction: trx });

    await logService.logAction({
      entity: "Communication",
      entityId: created.id,
      action: "CREATE",
      afterData: created.toJSON(),
    });

    return created;
  }

  async findById(id: number) {
    return Communication.findByPk(id);
  }

  async findAll() {
    return Communication.findAll();
  }

  // src/repositories/communicationRepository.ts

  async findThread(parentId: number) {
    return Communication.findAll({
      where: {
        [Op.or]: [
          { id: parentId },       // The original message
          { parentId: parentId }  // All replies
        ]
      },
      order: [['createdAt', 'ASC']]
    });
  }

  async update(id: number, payload: Partial<Communication>, trx: Transaction | null = null) {
    const comm = await Communication.findByPk(id);
    if (!comm) return null;

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

  async delete(id: number, username: string, trx: Transaction | null = null) {
    const comm = await Communication.findByPk(id);
    if (!comm) return null;

    const beforeData = comm.getDataValue('title');
    console.log(beforeData)
    await comm.destroy({ transaction: trx });

    await logService.logAction({
      entity: "Communication",
      entityId: id,
      action: "DELETE",
      beforeData,
      performedBy: username,
    });

    return comm;
  }
}
