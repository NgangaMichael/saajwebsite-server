// src/services/logService.ts
import { LogRepository } from "../repositories/logRepository.js";

export class LogService {
  private repo: LogRepository;

  constructor() {
    this.repo = new LogRepository();
  }

  async logAction({
    entity,
    entityId,
    action,
    beforeData,
    afterData,
    performedBy,
  }: {
    entity: string;
    entityId: number;
    action: string;
    beforeData?: any;
    afterData?: any;
    performedBy?: string;
  }) {
    await this.repo.create({
      entity,
      entityId,
      action,
      beforeData: beforeData ?? null,
      afterData: afterData ?? null,
      performedBy: performedBy ?? null
    });
  }
}
