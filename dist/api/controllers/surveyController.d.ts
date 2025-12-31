import type { Request, Response, NextFunction } from "express";
export declare const createSurvey: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getSurveys: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getSurveyById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getSurveyAnalytics: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const submitResponse: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=surveyController.d.ts.map