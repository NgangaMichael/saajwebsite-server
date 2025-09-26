import type { Request, Response, NextFunction } from 'express';
export declare const createUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getUsers: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getUserById: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=userController.d.ts.map