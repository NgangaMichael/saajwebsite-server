import type { Request, Response, NextFunction } from 'express';
export declare const createCommittee: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getCommittees: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getCommitteeById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCommittee: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCommittee: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=committeeController.d.ts.map