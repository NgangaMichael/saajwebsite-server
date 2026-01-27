import { UserRepository } from '../repositories/userRepository.js';
import { calculateAge } from '../utils/calculateAge.js';
import { User } from '../models/user.js';
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
      // ✅ Only hash if password is being changed
      if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
      } else {
        // ✅ Prevent accidental overwrite
        delete data.password;
      }

      return this.repo.update(id, data, trx);
    });
  }

  async deleteUser(id: number,) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, trx);
    });
  }

  async updateAgesFromDob() {
    const users = await User.findAll();

    for (const user of users) {
      if (!user.dob) continue;

      const age = calculateAge(user.dob);
      await user.update({ age });
    }
  }

}
