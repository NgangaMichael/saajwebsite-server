import { UserService } from '../../services/userService.js';
const service = new UserService();
export const createUser = async (req, res, next) => {
    try {
        const user = await service.createUser(req.body);
        res.status(201).json({ data: user });
    }
    catch (err) {
        next(err);
    }
};
export const getUsers = async (_req, res, next) => {
    try {
        const users = await service.listUsers();
        res.json({ data: users });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=userController.js.map