// src/services/committeeService.ts
import { CommitteeRepository } from '../repositories/committeeRepository.js';
import sequelize from '../db/index.js';
export class CommitteeService {
    repo = new CommitteeRepository();
    async createCommittee(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listCommittees() {
        return this.repo.findAll();
    }
    async getCommitteeById(id) {
        return this.repo.findById(id);
    }
    async updateCommittee(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteCommittee(id) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, trx);
        });
    }
}
//# sourceMappingURL=committeeService.js.map