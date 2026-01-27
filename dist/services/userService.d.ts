import { UserRepository } from '../repositories/userRepository.js';
import { User } from '../models/user.js';
export declare class UserService {
    repo: UserRepository;
    createUser(data: any): Promise<User>;
    listUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User | null>;
    updateUser(id: number, data: any): Promise<User | null>;
    deleteUser(id: number): Promise<User | null>;
    updateAgesFromDob(): Promise<void>;
}
//# sourceMappingURL=userService.d.ts.map