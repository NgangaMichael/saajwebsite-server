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
}
//# sourceMappingURL=userRepository.js.map