// src/services/folderService .ts
import { FolderRepository } from '../repositories/folderRepository.js';
import sequelize from '../db/index.js';
export class FolderService {
    repo = new FolderRepository();
    async createFolder(data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.create(data, trx);
        });
    }
    async listFolders() {
        return this.repo.findAll();
    }
    async getFolderById(id) {
        return this.repo.findById(id);
    }
    async updateFolder(id, data) {
        return sequelize.transaction(async (trx) => {
            return this.repo.update(id, data, trx);
        });
    }
    async deleteFolder(id, username) {
        return sequelize.transaction(async (trx) => {
            return this.repo.delete(id, username, trx);
        });
    }
}
//# sourceMappingURL=folderService.js.map