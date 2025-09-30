// src/repositories/documentRepository.ts
import { Document } from '../models/document.js';
import { Transaction } from 'sequelize';

export class DocumentRepository {
  async create(payload: Partial<Document>, trx: Transaction | null = null) {
    return Document.create(payload as any, { transaction: trx });
  }

  async findById(id: number) {
    return Document.findByPk(id);
  }

  async findAll() {
    return Document.findAll();
  }

  async update(id: number, payload: Partial<Document>, trx: Transaction | null = null) {
    const doc = await Document.findByPk(id);
    if (!doc) return null;
    return doc.update(payload, { transaction: trx });
  }

  async delete(id: number, trx: Transaction | null = null) {
    const doc = await Document.findByPk(id);
    if (!doc) return null;
    await doc.destroy({ transaction: trx });
    return doc;
  }
}
