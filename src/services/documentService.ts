// src/services/documentService.ts
import { DocumentRepository } from '../repositories/documentRepository.js';
import sequelize from '../db/index.js';

export class DocumentService {
  repo = new DocumentRepository();

  async createDocument(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listDocuments() {
    return this.repo.findAll();
  }

  async getDocumentById(id: number) {
    return this.repo.findById(id);
  }

  async updateDocument(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteDocument(id: number) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, trx);
    });
  }
}
