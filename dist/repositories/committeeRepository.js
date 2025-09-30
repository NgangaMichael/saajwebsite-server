// src/repositories/committeeRepository.ts
import { Committee } from '../models/committee.js';
import { Transaction } from 'sequelize';
export class CommitteeRepository {
    async create(payload, trx = null) {
        return Committee.create(payload, { transaction: trx });
    }
    async findById(id) {
        return Committee.findByPk(id);
    }
    async findAll() {
        return Committee.findAll();
    }
    async update(id, payload, trx = null) {
        const committee = await Committee.findByPk(id);
        if (!committee)
            return null;
        return committee.update(payload, { transaction: trx });
    }
    async delete(id, trx = null) {
        const committee = await Committee.findByPk(id);
        if (!committee)
            return null;
        await committee.destroy({ transaction: trx });
        return committee;
    }
}
//# sourceMappingURL=committeeRepository.js.map