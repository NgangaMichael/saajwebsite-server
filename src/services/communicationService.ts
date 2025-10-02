// src/services/communicationService.ts
import { CommunicationRepository } from '../repositories/communicationRepository.js';
import sequelize from '../db/index.js';

export class CommunicationService {
  repo = new CommunicationRepository();

  async createCommunication(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listCommunications() {
    return this.repo.findAll();
  }

  async getCommunicationById(id: number) {
    return this.repo.findById(id);
  }

  async updateCommunication(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteCommunication(id: number) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, trx);
    });
  }
}
