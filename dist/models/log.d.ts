import { Model } from "sequelize-typescript";
export declare class Log extends Model<Log> {
    entity: string;
    entityId: number;
    action: string;
    beforeData?: any;
    afterData?: any;
    performedBy?: string | null;
}
//# sourceMappingURL=log.d.ts.map