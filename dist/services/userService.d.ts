import { UserRepository } from '../repositories/userRepository.js';
export declare class UserService {
    repo: UserRepository;
    createUser(data: any): Promise<import("../models/user.js").User>;
    listUsers(): Promise<import("../models/user.js").User[]>;
    getUserById(id: number): Promise<import("../models/user.js").User | null>;
    updateUser(id: number, data: any): Promise<import("../models/user.js").User | null>;
    deleteUser(id: number): Promise<import("../models/user.js").User | null>;
}
//# sourceMappingURL=userService.d.ts.map