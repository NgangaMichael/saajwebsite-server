import { Model } from "sequelize-typescript";
export declare class Meeting extends Model<Meeting> {
    createdById: number;
    createdByUsername: string;
    title: string;
    description: string;
    platform: string;
    link: string;
    dateTime: Date;
    status: string;
    audience: Array<{
        type: string;
        id?: number;
        name?: string;
        username?: string;
    }>;
    extraEmails: string[];
    adminComments: string | null;
}
//# sourceMappingURL=meeting.d.ts.map