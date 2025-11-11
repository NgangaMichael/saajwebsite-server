import { Model } from 'sequelize-typescript';
export declare class Document extends Model<Document> {
    documentName: string;
    uploadedBy: string;
    accessedBy?: string;
    path: string;
    type?: string;
    committee?: string;
    subcommittee?: string;
    file?: string;
    status?: number;
    status2?: number;
    description?: string;
}
//# sourceMappingURL=document.d.ts.map