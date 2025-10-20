// src/services/committeeService.ts
import { CommitteeRepository } from '../repositories/committeeRepository.js';
import sequelize from '../db/index.js';

export class CommitteeService {
  repo = new CommitteeRepository();

  async createCommittee(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listCommittees() {
    return this.repo.findAll();
  }

  async getCommitteeById(id: number) {
    return this.repo.findById(id);
  }

  async updateCommittee(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteCommittee(id: number, username: string) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, username, trx);
    });
  }
}
