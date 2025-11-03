// src/repositories/transactionRepository.ts
import { Transactioncodes } from "../models/transactioncode.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class TransactioncodeRepository {
  async create(payload: Partial<Transactioncodes>, trx: Transaction | null = null) {
    return Transactioncodes.create(payload as any, { transaction: trx });
  }

  async findById(id: number) {
    return Transactioncodes.findByPk(id);
  }

  async findAll() {
    return Transactioncodes.findAll();
  }

  async update(id: number, payload: Partial<Transactioncodes>, trx: Transaction | null = null) {
    const transactioncode = await Transactioncodes.findByPk(id);
    if (!transactioncode) return null;

    const beforeData = transactioncode.toJSON();
    const updated = await transactioncode.update(payload, { transaction: trx });

    await logService.logAction({
      entity: "Transactioncodes",
      entityId: id,
      action: "UPDATE",
      beforeData,
      afterData: updated.toJSON(),
    });

    return updated;
  }

  async delete(id: number, username: string, trx: Transaction | null = null) {
    const transactioncode = await Transactioncodes.findByPk(id);
    if (!transactioncode) return null;
    
    await transactioncode.destroy({ transaction: trx });

    await logService.logAction({
      entity: "Transactioncodes",
      entityId: id,
      action: "DELETE",
      performedBy: username
    });

    return transactioncode;
  }
}
