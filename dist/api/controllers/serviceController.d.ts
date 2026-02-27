import type { Request, Response, NextFunction } from 'express';
export declare const createService: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getServices: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getServiceById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateService: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteService: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=serviceController.d.ts.map