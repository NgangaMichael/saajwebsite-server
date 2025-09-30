import { Model } from 'sequelize-typescript';
export declare class Committee extends Model<Committee> {
    name: string;
    head: string;
    subCommittee?: string;
    totalMembers?: number;
    description?: string;
}
//# sourceMappingURL=committee.d.ts.map