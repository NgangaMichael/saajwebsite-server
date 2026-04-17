// src/api/controllers/serviceController.ts
import type { Request, Response, NextFunction } from 'express';
import { ServiceService } from '../../services/serviceService.js';

const service = new ServiceService();

// src/api/controllers/serviceController.ts

export const createService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      // Save as "uploads/filename.pdf" (No leading slash)
      data.servicelink = `uploads/${req.file.filename}`;
    }

    const serviceData = await service.createService(data);
    res.status(201).json({ data: serviceData });
  } catch (err) {
    next(err);
  }
};

export const getServices = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const services = await service.listServices();
    res.json({ data: services });
  } catch (err) {
    next(err);
  }
};

export const getServiceById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const serviceData = await service.getServiceById(Number(req.params.id));
    if (!serviceData) return res.status(404).json({ message: 'Service not found' });
    res.json({ data: serviceData });
  } catch (err) {
    next(err);
  }
};

export const updateService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.servicelink = `uploads/${req.file.filename}`;
    }

    const serviceData = await service.updateService(Number(req.params.id), data);
    if (!serviceData) return res.status(404).json({ message: 'Service not found' });
    res.json({ data: serviceData });
  } catch (err) {
    next(err);
  }
};

export const deleteService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const serviceData = await service.deleteService(Number(req.params.id), String(req.params.username));
    if (!serviceData) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted', data: serviceData });
  } catch (err) {
    next(err);
  }
};
