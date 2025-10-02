// src/repositories/documentRepository.ts
import { Document } from "../models/document.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class DocumentRepository {
    async create(payload, trx = null) {
        const created = await Document.create(payload, { transaction: trx });
        await logService.logAction({
            entity: "Document",
            entityId: created.id,
            action: "CREATE",
            afterData: created.toJSON(),
        });
        return created;
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
        const beforeData = doc.toJSON();
        const updated = await doc.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Document",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, trx = null) {
        const doc = await Document.findByPk(id);
        if (!doc)
            return null;
        const beforeData = doc.toJSON();
        await doc.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Document",
            entityId: id,
            action: "DELETE",
            beforeData,
        });
        return doc;
    }
}
//# sourceMappingURL=documentRepository.js.map