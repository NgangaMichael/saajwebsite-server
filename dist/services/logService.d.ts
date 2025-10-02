export declare class LogService {
    private repo;
    constructor();
    logAction({ entity, entityId, action, beforeData, afterData, performedBy, }: {
        entity: string;
        entityId: number;
        action: string;
        beforeData?: any;
        afterData?: any;
        performedBy?: string;
    }): Promise<void>;
}
//# sourceMappingURL=logService.d.ts.map