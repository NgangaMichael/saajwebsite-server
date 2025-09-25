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

  // add update, delete methods etc.
}
