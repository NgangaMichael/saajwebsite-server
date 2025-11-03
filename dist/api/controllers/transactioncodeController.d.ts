import type { Request, Response, NextFunction } from 'express';
export declare const createTransactioncode: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTransactioncodes: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getTransactioncodeById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateTransactioncode: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteTransactioncode: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=transactioncodeController.d.ts.map