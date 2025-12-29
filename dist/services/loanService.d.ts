import { LoanRepository } from "../repositories/loanRepository.js";
export declare class LoanService {
    repo: LoanRepository;
    createLoan(data: any): Promise<import("../models/loan.js").Loan>;
    listLoans(): Promise<import("../models/loan.js").Loan[]>;
    listLoansByUser(userId: number): Promise<import("../models/loan.js").Loan[]>;
    updateLoan(id: number, data: any): Promise<import("../models/loan.js").Loan | null>;
    deleteLoan(id: number): Promise<import("../models/loan.js").Loan | null>;
}
//# sourceMappingURL=loanService.d.ts.map