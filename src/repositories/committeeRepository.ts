// src/repositories/committeeRepository.ts
import { Committee } from "../models/committee.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class CommitteeRepository {
  async create(payload: Partial<Committee>, trx: Transaction | null = null) {
    return Committee.create(payload as any, { transaction: trx });
  }

  async findById(id: number) {
    return Committee.findByPk(id);
  }

  async findAll() {
    return Committee.findAll();
  }

  async update(id: number, payload: Partial<Committee>, trx: Transaction | null = null) {
    const committee = await Committee.findByPk(id);
    if (!committee) return null;

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

  async delete(id: number, trx: Transaction | null = null) {
    const committee = await Committee.findByPk(id);
    if (!committee) return null;

    const beforeData = committee.toJSON();
    await committee.destroy({ transaction: trx });

    await logService.logAction({
      entity: "Committee",
      entityId: id,
      action: "DELETE",
      beforeData,
    });

    return committee;
  }
}
