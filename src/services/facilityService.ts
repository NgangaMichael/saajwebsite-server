import { FacilityRepository } from '../repositories/facilityRepository.js';
import sequelize from '../db/index.js';

export class FacilityService {
  repo = new FacilityRepository();

  async createFacility(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listFacilities() {
    return this.repo.findAll();
  }

  async getFacilityById(id: number) {
    return this.repo.findById(id);
  }

  async updateFacility(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteFacility(id: number, username: string) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, username, trx);
    });
  }
}