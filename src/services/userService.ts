import { UserRepository } from '../repositories/userRepository.js';
import sequelize from '../db/index.js';

export class UserService {
  repo = new UserRepository();

  async createUser(data: any) {
    // Example of transaction usage
    return sequelize.transaction(async (trx) => {
      const user = await this.repo.create(data, trx);
      // ... other operations
      return user;
    });
  }

  async listUsers() {
    return this.repo.findAll();
  }
}
