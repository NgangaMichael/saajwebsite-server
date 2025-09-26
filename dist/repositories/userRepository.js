import { User } from '../models/user.js';
import { Transaction } from 'sequelize';
export class UserRepository {
    async create(payload, trx = null) {
        return User.create(payload, { transaction: trx });
    }
    async findById(id) {
        return User.findByPk(id);
    }
    async findAll() {
        return User.findAll();
    }
    async update(id, payload, trx = null) {
        const user = await User.findByPk(id);
        if (!user)
            return null;
        return user.update(payload, { transaction: trx });
    }
    async delete(id, trx = null) {
        const user = await User.findByPk(id);
        if (!user)
            return null;
        await user.destroy({ transaction: trx });
        return user;
    }
}
//# sourceMappingURL=userRepository.js.map