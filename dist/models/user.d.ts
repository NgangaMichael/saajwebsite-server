import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    username: string;
    email: string;
    password: string;
    age: number | null;
    gender: string | null;
    level: string | null;
    maritalStatus: string | null;
    committee: string | null;
    subCommittee: string | null;
    designation: string | null;
    membertype: string | null;
    subscription: string | null;
    subdate: string | null;
    fileNumber: string | null;
    approveStatus: string | null;
    waveSubscriptionStatus: string | null;
}
//# sourceMappingURL=user.d.ts.map