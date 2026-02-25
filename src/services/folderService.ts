// src/services/folderService .ts
import { FolderRepository } from '../repositories/folderRepository.js';
import sequelize from '../db/index.js';

export class FolderService {
  repo = new FolderRepository();

  async createFolder(data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.create(data, trx);
    });
  }

  async listFolders() {
    return this.repo.findAll();
  }

  async getFolderById(id: number) {
    return this.repo.findById(id);
  }

  async updateFolder(id: number, data: any) {
    return sequelize.transaction(async (trx) => {
      return this.repo.update(id, data, trx);
    });
  }

  async deleteFolder(id: number, username: string) {
    return sequelize.transaction(async (trx) => {
      return this.repo.delete(id, username, trx);
    });
  }
}
