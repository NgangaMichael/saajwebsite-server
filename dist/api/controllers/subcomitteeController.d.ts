import type { Request, Response, NextFunction } from 'express';
export declare const createsubCommittee: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getsubCommittees: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getsubCommitteeById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updatesubCommittee: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deletesubCommittee: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=subcomitteeController.d.ts.map