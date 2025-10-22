import sequelize from "../db/index.js";
import { LeaveRepository } from "../repositories/leaveRepository.js";
export class LeaveService {
    repo = new LeaveRepository();
    async createLeave(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listLeaves() {
        return this.repo.findAll();
    }
    async listLeavesByUser(userId) {
        return this.repo.findByUser(userId);
    }
    async updateLeave(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteLeave(id) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, trx);
        });
    }
}
//# sourceMappingURL=leaveService.js.map