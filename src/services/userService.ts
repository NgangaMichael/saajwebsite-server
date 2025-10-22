import { UserRepository } from '../repositories/userRepository.js';
import sequelize from '../db/index.js';
import bcrypt from 'bcrypt';

export class UserService {
  repo = new UserRepository();

  async createUser(data: any) {
    return sequelize.transaction(async (trx) => {
      // ✅ hash password if provided
      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      }

      const user = await this.repo.create(data, trx);
      return user;
    });
  }

  async listUsers() {
    return this.repo.findAll();
  }

  async getUserById(id: number) {
    return this.repo.findById(id);
  }

  async updateUser(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteUser(id: number,) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, trx);
    });
  }
}
