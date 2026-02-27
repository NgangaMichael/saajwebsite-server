// src/services/serviceService.ts
import { ServiceRepository } from '../repositories/serviceRepository.js';
import sequelize from '../db/index.js';
export class ServiceService {
    repo = new ServiceRepository();
    async createService(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listServices() {
        return this.repo.findAll();
    }
    async getServiceById(id) {
        return this.repo.findById(id);
    }
    async updateService(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteService(id, username) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, username, trx);
        });
    }
}
//# sourceMappingURL=serviceService.js.map