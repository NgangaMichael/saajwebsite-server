import type { Request, Response, NextFunction } from 'express';
import { FacilityService } from '../../services/facilityService.js';

const service = new FacilityService();

export const createFacility = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const facility = await service.createFacility(req.body);
    res.status(201).json({ data: facility });
  } catch (err) {
    next(err);
  }
};

export const getFacilities = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const facilities = await service.listFacilities();
    res.json({ data: facilities });
  } catch (err) {
    next(err);
  }
};

export const getFacilityById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const facility = await service.getFacilityById(Number(req.params.id));
    if (!facility) return res.status(404).json({ message: 'Facility not found' });
    res.json({ data: facility });
  } catch (err) {
    next(err);
  }
};

export const updateFacility = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const facility = await service.updateFacility(Number(req.params.id), req.body);
    if (!facility) return res.status(404).json({ message: 'Facility not found' });
    res.json({ data: facility });
  } catch (err) {
    next(err);
  }
};

export const deleteFacility = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const facility = await service.deleteFacility(Number(req.params.id), String(req.params.username));
    if (!facility) return res.status(404).json({ message: 'Facility not found' });
    res.json({ message: 'Facility deleted', data: facility });
  } catch (err) {
    next(err);
  }
};