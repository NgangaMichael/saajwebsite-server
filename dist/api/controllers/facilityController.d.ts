import type { Request, Response, NextFunction } from 'express';
export declare const createFacility: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getFacilities: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getFacilityById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateFacility: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteFacility: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=facilityController.d.ts.map