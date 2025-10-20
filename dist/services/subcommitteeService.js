// src/services/subcommitteeService.ts
import { SubCommitteeRepository } from '../repositories/subcommitteeRepositiry.js';
import sequelize from '../db/index.js';
export class SubCommitteeService {
    repo = new SubCommitteeRepository();
    async createsubCommittee(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listsubCommittees() {
        return this.repo.findAll();
    }
    async getsubCommitteeById(id) {
        return this.repo.findById(id);
    }
    async updatesubCommittee(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deletesubCommittee(id, username) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, username, trx);
        });
    }
}
//# sourceMappingURL=subcommitteeService.js.map