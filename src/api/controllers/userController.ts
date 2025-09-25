import type { Request, Response, NextFunction } from 'express';
import { UserService } from '../../services/userService.js';

const service = new UserService();

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await service.createUser(req.body);
    res.status(201).json({ data: user });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await service.listUsers();
    res.json({ data: users });
  } catch (err) {
    next(err);
  }
};
