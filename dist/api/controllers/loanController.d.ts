import type { Request, Response, NextFunction } from "express";
export declare const applyLoan: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getLoans: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getLoansByUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateLoan: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteLoan: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=loanController.d.ts.map