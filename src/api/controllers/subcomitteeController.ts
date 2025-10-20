// src/api/controllers/subcommitteeController.ts
import type { Request, Response, NextFunction } from 'express';
import { SubCommitteeService } from '../../services/subcommitteeService.js';

const service = new SubCommitteeService();

export const createsubCommittee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Subcommittee = await service.createsubCommittee(req.body);
    res.status(201).json({ data: Subcommittee });
  } catch (err) {
    next(err);
  }
};

export const getsubCommittees = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const subcommittees = await service.listsubCommittees();
    res.json({ data: subcommittees });
  } catch (err) {
    next(err);
  }
};

export const getsubCommitteeById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Subcommittee = await service.getsubCommitteeById(Number(req.params.id));
    if (!Subcommittee) return res.status(404).json({ message: 'SubCommittee not found' });
    res.json({ data: Subcommittee });
  } catch (err) {
    next(err);
  }
};

export const updatesubCommittee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Subcommittee = await service.updatesubCommittee(Number(req.params.id), req.body);
    if (!Subcommittee) return res.status(404).json({ message: 'SubCommittee not found' });
    res.json({ data: Subcommittee });
  } catch (err) {
    next(err);
  }
};

export const deletesubCommittee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Subcommittee = await service.deletesubCommittee(Number(req.params.id), String(req.params.username));
    if (!Subcommittee) return res.status(404).json({ message: 'SubCommittee not found' });
    res.json({ message: 'SubCommittee deleted', data: Subcommittee });
  } catch (err) {
    next(err);
  }
};
