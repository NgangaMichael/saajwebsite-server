import type { Request, Response, NextFunction } from 'express';
export declare const createDocument: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getDocuments: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getDocumentById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateDocument: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteDocument: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=documentController.d.ts.map