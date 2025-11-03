// src/services/committeeService.ts
import { TransactioncodeRepository } from '../repositories/transactionRepository.js';
import sequelize from '../db/index.js';

export class TransactioncodeService {
  repo = new TransactioncodeRepository();

  async createTransactioncode(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listTransactioncodes() {
    return this.repo.findAll();
  }

  async getTransactioncodeById(id: number) {
    return this.repo.findById(id);
  }

  async updateTransactioncode(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteTransactioncode(id: number, username: string) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, username, trx);
    });
  }
}
