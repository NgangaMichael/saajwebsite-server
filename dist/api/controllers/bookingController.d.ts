import type { Request, Response, NextFunction } from "express";
export declare const applyBooking: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getBookings: (_req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getBookingsByUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateBooking: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteBooking: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=bookingController.d.ts.map