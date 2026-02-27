// src/services/serviceService.ts
import { ServiceRepository } from '../repositories/serviceRepository.js';
import sequelize from '../db/index.js';

export class ServiceService {
  repo = new ServiceRepository();

  async createService(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listServices() {
    return this.repo.findAll();
  }

  async getServiceById(id: number) {
    return this.repo.findById(id);
  }

  async updateService(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteService(id: number, username: string) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, username, trx);
    });
  }
}
