import { UserRepository } from '../repositories/userRepository.js';
export declare class UserService {
    repo: UserRepository;
    createUser(data: any): Promise<import("../models/user.js").User>;
    listUsers(): Promise<import("../models/user.js").User[]>;
}
//# sourceMappingURL=userService.d.ts.map