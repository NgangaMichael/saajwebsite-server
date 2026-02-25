// src/repositories/folderRepository.ts
import { Folder } from "../models/folders.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class FolderRepository {
    async create(payload, trx = null) {
        return Folder.create(payload, { transaction: trx });
    }
    async findById(id) {
        return Folder.findByPk(id);
    }
    async findAll() {
        return Folder.findAll();
    }
    async update(id, payload, trx = null) {
        const folder = await Folder.findByPk(id);
        if (!folder)
            return null;
        const beforeData = folder.toJSON();
        const updated = await folder.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "Folder",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, username, trx = null) {
        const folder = await Folder.findByPk(id);
        if (!folder)
            return null;
        const beforeData = folder.getDataValue("foldername");
        console.log("Before Data:", beforeData);
        await folder.destroy({ transaction: trx });
        await logService.logAction({
            entity: "Folder",
            entityId: id,
            action: "DELETE",
            beforeData,
            performedBy: username,
        });
        return folder;
    }
}
//# sourceMappingURL=folderRepository.js.map