import { Model } from 'sequelize-typescript';
export declare class Communication extends Model<Communication> {
    title: string;
    info: string;
    parentId?: number;
    sender: string;
    sendto: string;
    sendtoid: number;
}
//# sourceMappingURL=communication.d.ts.map