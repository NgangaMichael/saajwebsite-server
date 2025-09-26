import { User } from '../models/user.js';
import { Transaction } from 'sequelize';

export class UserRepository {
  async create(payload: Partial<User>, trx: Transaction | null = null) {
    return User.create(payload as any, { transaction: trx });
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
    return user.update(payload, { transaction: trx });
  }

  async delete(id: number, trx: Transaction | null = null) {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy({ transaction: trx });
    return user;
  }

}
