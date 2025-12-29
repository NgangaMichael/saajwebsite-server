import { Loan } from "../models/loan.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class LoanRepository {
  async create(payload: Partial<Loan>, trx: Transaction | null = null) {
    const created = await Loan.create(payload as any, { transaction: trx });
    await logService.logAction({
      entity: "Loan",
      entityId: created.id,
      action: "CREATE",
      afterData: created.toJSON(),
    });
    return created;
  }

  async findAll() {
    return Loan.findAll({ include: ["user"] });
  }

  async findByUser(userId: number) {
    return Loan.findAll({ where: { userId }, include: ["user"] });
  }

  async findById(id: number) {
    return Loan.findByPk(id, { include: ["user"] });
  }

  async update(id: number, payload: Partial<Loan>, trx: Transaction | null = null) {
    const loan = await Loan.findByPk(id);
    if (!loan) return null;

    const beforeData = loan.toJSON();
    const updated = await loan.update(payload, { transaction: trx });

    await logService.logAction({
      entity: "Loan",
      entityId: id,
      action: "UPDATE",
      beforeData,
      afterData: updated.toJSON(),
    });

    return updated;
  }

  async delete(id: number, trx: Transaction | null = null) {
    const loan = await Loan.findByPk(id);
    if (!loan) return null;

    const beforeData = loan.toJSON();
    await loan.destroy({ transaction: trx });

    await logService.logAction({
      entity: "Loan",
      entityId: id,
      action: "DELETE",
      beforeData,
    });

    return loan;
  }
}