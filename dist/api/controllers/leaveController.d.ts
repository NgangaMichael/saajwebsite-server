import type { Request, Response, NextFunction } from "express";
export declare const applyLeave: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getLeaves: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getLeavesByUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateLeave: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteLeave: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=leaveController.d.ts.map