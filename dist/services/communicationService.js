// src/services/communicationService.ts
import { CommunicationRepository } from '../repositories/communicationRepository.js';
import sequelize from '../db/index.js';
export class CommunicationService {
    repo = new CommunicationRepository();
    async createCommunication(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listCommunications() {
        return this.repo.findAll();
    }
    async getCommunicationById(id) {
        return this.repo.findById(id);
    }
    async updateCommunication(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteCommunication(id, username) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, username, trx);
        });
    }
}
//# sourceMappingURL=communicationService.js.map