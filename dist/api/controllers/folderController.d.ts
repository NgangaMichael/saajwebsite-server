import type { Request, Response, NextFunction } from 'express';
export declare const createFolder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getFolders: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getFolderById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateFolder: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteFolder: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=folderController.d.ts.map