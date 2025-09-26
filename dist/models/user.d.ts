import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    username: string;
    password: string;
    age?: number;
    gender?: string;
    level?: string;
    maritalStatus?: string;
    committee?: string;
    subCommittee?: string;
    designation?: string;
    subscription?: string;
    fileNumber?: string;
    approveStatus?: string;
    waveSubscriptionStatus?: string;
}
//# sourceMappingURL=user.d.ts.map