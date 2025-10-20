// src/repositories/documentRepository.ts
import { Document } from "../models/document.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class DocumentRepository {
  async create(payload: Partial<Document>, trx: Transaction | null = null) {
    const created = await Document.create(payload as any, { transaction: trx });

    await logService.logAction({
      entity: "Document",
      entityId: created.id,
      action: "CREATE",
      afterData: created.toJSON(),
    });

    return created;
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

  async delete(id: number, username: string, trx: Transaction | null = null) {
    const doc = await Document.findByPk(id);
    if (!doc) return null;

    const beforeData = doc.getDataValue("documentName");
    console.log(beforeData)
    await doc.destroy({ transaction: trx });

    await logService.logAction({
      entity: "Document",
      entityId: id,
      action: "DELETE",
      beforeData,
      performedBy: username,
    });

    return doc;
  }
}
