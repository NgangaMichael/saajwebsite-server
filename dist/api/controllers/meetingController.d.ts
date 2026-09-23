import type { Request, Response, NextFunction } from "express";
export declare const createMeeting: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getMeetings: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateMeeting: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteMeeting: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=meetingController.d.ts.map