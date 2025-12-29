import sequelize from "../db/index.js";
import { LoanRepository } from "../repositories/loanRepository.js";

export class LoanService {
  repo = new LoanRepository();

  async createLoan(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listLoans() {
    return this.repo.findAll();
  }

  async listLoansByUser(userId: number) {
    return this.repo.findByUser(userId);
  }

  async updateLoan(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteLoan(id: number) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, trx);
    });
  }
}