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
    return User.findAll({
      order: [['username', 'ASC']] // Sorts by username in Ascending order
    });
  }

  async update(id: number, payload: Partial<User>, trx: Transaction | null = null) {
  // 1. Verify user exists
  const user = await User.findByPk(id);
  if (!user) return null;

  const beforeData = user.toJSON();

  // 2. Use the Static Update (this is more reliable when warnings appear)
  await User.update(payload, {
    where: { id },
    transaction: trx
  });

  // 3. Fetch the FRESH data directly from the DB
  const updatedUser = await User.findByPk(id, { transaction: trx });
  if (!updatedUser) return null;

  // 4. Log the change with the ACTUAL data saved to DB
  await logService.logAction({
    entity: "User",
    entityId: id,
    action: "UPDATE",
    beforeData,
    afterData: updatedUser.toJSON(),
  });

  return updatedUser;
}

  async delete(id: number, trx: Transaction | null = null) {
    const user = await User.findByPk(id);
    if (!user) return null;

    const beforeData = user.username;
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
