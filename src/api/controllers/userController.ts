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

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await service.getUserById(Number(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ data: user });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await service.updateUser(Number(req.params.id), req.body);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ data: user });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await service.deleteUser(Number(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted', data: user });
  } catch (err) {
    next(err);
  }
};
