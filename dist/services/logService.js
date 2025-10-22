// src/services/logService.ts
import { LogRepository } from "../repositories/logRepository.js";
export class LogService {
    repo;
    constructor() {
        this.repo = new LogRepository();
    }
    async logAction({ entity, entityId, action, beforeData, afterData, performedBy, }) {
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
//# sourceMappingURL=logService.js.map