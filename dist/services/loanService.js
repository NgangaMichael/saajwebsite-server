import sequelize from "../db/index.js";
import { LoanRepository } from "../repositories/loanRepository.js";
export class LoanService {
    repo = new LoanRepository();
    async createLoan(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listLoans() {
        return this.repo.findAll();
    }
    async listLoansByUser(userId) {
        return this.repo.findByUser(userId);
    }
    async updateLoan(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteLoan(id) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, trx);
        });
    }
}
//# sourceMappingURL=loanService.js.map