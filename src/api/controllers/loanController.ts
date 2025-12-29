import type { Request, Response, NextFunction } from "express";
import { LoanService } from "../../services/loanService.js";

const service = new LoanService();

export const applyLoan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan = await service.createLoan(req.body);
    res.status(201).json({ data: loan });
  } catch (err) {
    next(err);
  }
};

export const getLoans = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const loans = await service.listLoans();
    res.json({ data: loans });
  } catch (err) {
    next(err);
  }
};

export const getLoansByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loans = await service.listLoansByUser(Number(req.params.userId));
    res.json({ data: loans });
  } catch (err) {
    next(err);
  }
};

export const updateLoan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan = await service.updateLoan(Number(req.params.id), req.body);
    if (!loan) return res.status(404).json({ message: "Loan not found" });
    res.json({ data: loan });
  } catch (err) {
    next(err);
  }
};

export const deleteLoan = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const loan = await service.deleteLoan(Number(req.params.id));
    if (!loan) return res.status(404).json({ message: "Loan not found" });
    res.json({ message: "Loan deleted", data: loan });
  } catch (err) {
    next(err);
  }
};