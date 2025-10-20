// src/middleware/userHeaderMiddleware.ts
import { Request, Response, NextFunction } from "express";
export const userHeaderMiddleware = (req, res, next) => {
    req.performedBy = req.headers["x-user-name"] || "Unknown User";
    next();
};
//# sourceMappingURL=userHeaderMiddleware.js.map