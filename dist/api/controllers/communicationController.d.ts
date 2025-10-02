import type { Request, Response, NextFunction } from 'express';
export declare const createCommunication: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getCommunications: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getCommunicationById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCommunication: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCommunication: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=communicationController.d.ts.map