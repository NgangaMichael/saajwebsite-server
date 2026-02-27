// src/repositories/serviceRepository.ts
import { Service } from "../models/service.js";
import { Transaction } from "sequelize";
import { LogService } from "../services/logService.js";

const logService = new LogService();

export class ServiceRepository {
  async create(payload: Partial<Service>, trx: Transaction | null = null) {
    return Service.create(payload as any, { transaction: trx });
  }

  async findById(id: number) {
    return Service.findByPk(id);
  }

  async findAll() {
    return Service.findAll();
  }

  async update(id: number, payload: Partial<Service>, trx: Transaction | null = null) {
    const service = await Service.findByPk(id);
    if (!service) return null;

    const beforeData = service.toJSON();
    const updated = await service.update(payload, { transaction: trx });

    await logService.logAction({
      entity: "Service",
      entityId: id,
      action: "UPDATE",
      beforeData,
      afterData: updated.toJSON(),
    });

    return updated;
  }

  async delete(id: number, username: string, trx: Transaction | null = null) {
    const service = await Service.findByPk(id);
    if (!service) return null;

    const beforeData = service.getDataValue("servicename");
    console.log("Before Data:", beforeData);
    
    await service.destroy({ transaction: trx });

    await logService.logAction({
      entity: "Service",
      entityId: id,
      action: "DELETE",
      beforeData,
      performedBy: username,
    });

    return service;
  }
}
