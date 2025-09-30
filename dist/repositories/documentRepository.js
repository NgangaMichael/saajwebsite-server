// src/repositories/documentRepository.ts
import { Document } from '../models/document.js';
import { Transaction } from 'sequelize';
export class DocumentRepository {
    async create(payload, trx = null) {
        return Document.create(payload, { transaction: trx });
    }
    async findById(id) {
        return Document.findByPk(id);
    }
    async findAll() {
        return Document.findAll();
    }
    async update(id, payload, trx = null) {
        const doc = await Document.findByPk(id);
        if (!doc)
            return null;
        return doc.update(payload, { transaction: trx });
    }
    async delete(id, trx = null) {
        const doc = await Document.findByPk(id);
        if (!doc)
            return null;
        await doc.destroy({ transaction: trx });
        return doc;
    }
}
//# sourceMappingURL=documentRepository.js.map