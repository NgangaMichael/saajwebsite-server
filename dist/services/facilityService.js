import { FacilityRepository } from '../repositories/facilityRepository.js';
import sequelize from '../db/index.js';
export class FacilityService {
    repo = new FacilityRepository();
    async createFacility(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listFacilities() {
        return this.repo.findAll();
    }
    async getFacilityById(id) {
        return this.repo.findById(id);
    }
    async updateFacility(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteFacility(id, username) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, username, trx);
        });
    }
}
//# sourceMappingURL=facilityService.js.map