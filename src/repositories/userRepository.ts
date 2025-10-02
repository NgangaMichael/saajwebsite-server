// src/repositories/userRepository.ts
import { User } from "../models/user.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class UserRepository {
  async create(payload: Partial<User>, trx: Transaction | null = null) {
    const created = await User.create(payload as any, { transaction: trx });

    await logService.logAction({
      entity: "User",
      entityId: created.id,
      action: "CREATE",
      afterData: created.toJSON(),
    });

    return created;
  }

  async findById(id: number) {
    return User.findByPk(id);
  }

  async findAll() {
    return User.findAll();
  }

  async update(id: number, payload: Partial<User>, trx: Transaction | null = null) {
    const user = await User.findByPk(id);
    if (!user) return null;

    const beforeData = user.toJSON();
    const updated = await user.update(payload, { transaction: trx });

    await logService.logAction({
      entity: "User",
      entityId: id,
      action: "UPDATE",
      beforeData,
      afterData: updated.toJSON(),
    });

    return updated;
  }

  async delete(id: number, trx: Transaction | null = null) {
    const user = await User.findByPk(id);
    if (!user) return null;

    const beforeData = user.toJSON();
    await user.destroy({ transaction: trx });

    await logService.logAction({
      entity: "User",
      entityId: id,
      action: "DELETE",
      beforeData,
    });

    return user;
  }
}
