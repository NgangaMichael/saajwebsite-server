import { FolderRepository } from '../repositories/folderRepository.js';
export declare class FolderService {
    repo: FolderRepository;
    createFolder(data: any): Promise<import("../models/folders.js").Folder>;
    listFolders(): Promise<import("../models/folders.js").Folder[]>;
    getFolderById(id: number): Promise<import("../models/folders.js").Folder | null>;
    updateFolder(id: number, data: any): Promise<import("../models/folders.js").Folder | null>;
    deleteFolder(id: number, username: string): Promise<import("../models/folders.js").Folder | null>;
}
//# sourceMappingURL=folderService.d.ts.map