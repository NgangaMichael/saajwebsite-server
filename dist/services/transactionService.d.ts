import { TransactioncodeRepository } from '../repositories/transactionRepository.js';
export declare class TransactioncodeService {
    repo: TransactioncodeRepository;
    createTransactioncode(data: any): Promise<import("../models/transactioncode.js").Transactioncodes>;
    listTransactioncodes(): Promise<import("../models/transactioncode.js").Transactioncodes[]>;
    getTransactioncodeById(id: number): Promise<import("../models/transactioncode.js").Transactioncodes | null>;
    updateTransactioncode(id: number, data: any): Promise<import("../models/transactioncode.js").Transactioncodes | null>;
    deleteTransactioncode(id: number, username: string): Promise<import("../models/transactioncode.js").Transactioncodes | null>;
}
//# sourceMappingURL=transactionService.d.ts.map