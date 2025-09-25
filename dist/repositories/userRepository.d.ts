import { User } from '../models/user.js';
import { Transaction } from 'sequelize';
export declare class UserRepository {
    create(payload: Partial<User>, trx?: Transaction | null): Promise<User>;
    findById(id: number): Promise<User | null>;
    findAll(): Promise<User[]>;
}
//# sourceMappingURL=userRepository.d.ts.map