// src/repositories/committeeRepository.ts
import { Committee } from '../models/committee.js';
import { Transaction } from 'sequelize';

export class CommitteeRepository {
  async create(payload: Partial<Committee>, trx: Transaction | null = null) {
    return Committee.create(payload as any, { transaction: trx });
  }

  async findById(id: number) {
    return Committee.findByPk(id);
  }

  async findAll() {
    return Committee.findAll();
  }

  async update(id: number, payload: Partial<Committee>, trx: Transaction | null = null) {
    const committee = await Committee.findByPk(id);
    if (!committee) return null;
    return committee.update(payload, { transaction: trx });
  }

  async delete(id: number, trx: Transaction | null = null) {
    const committee = await Committee.findByPk(id);
    if (!committee) return null;
    await committee.destroy({ transaction: trx });
    return committee;
  }
}
