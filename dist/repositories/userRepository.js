// src/repositories/userRepository.ts
import { User } from "../models/user.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";
const logService = new LogService();
export class UserRepository {
    async create(payload, trx = null) {
        const created = await User.create(payload, { transaction: trx });
        await logService.logAction({
            entity: "User",
            entityId: created.id,
            action: "CREATE",
            afterData: created.toJSON(),
        });
        return created;
    }
    async findById(id) {
        return User.findByPk(id);
    }
    async findAll() {
        return User.findAll({
            order: [['username', 'ASC']] // Sorts by username in Ascending order
        });
    }
    async update(id, payload, trx = null) {
        const user = await User.findByPk(id);
        if (!user)
            return null;
        const beforeData = user.toJSON();
        const updated = await user.update(payload, { transaction: trx });
        await logService.logAction({
            entity: "User",
            entityId: id,
            action: "UPDATE",
            beforeData,
            afterData: updated.toJSON(),
        });
        return updated;
    }
    async delete(id, trx = null) {
        const user = await User.findByPk(id);
        if (!user)
            return null;
        const beforeData = user.username;
        await user.destroy({ transaction: trx });
        await logService.logAction({
            entity: "User",
            entityId: id,
            action: "DELETE",
            beforeData,
        });
        return user;
    }
}
//# sourceMappingURL=userRepository.js.map