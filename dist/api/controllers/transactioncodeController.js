import { TransactioncodeService } from '../../services/transactionService.js';
const service = new TransactioncodeService();
export const createTransactioncode = async (req, res, next) => {
    try {
        const committee = await service.createTransactioncode(req.body);
        res.status(201).json({ data: committee });
    }
    catch (err) {
        next(err);
    }
};
export const getTransactioncodes = async (_req, res, next) => {
    try {
        const committees = await service.listTransactioncodes();
        res.json({ data: committees });
    }
    catch (err) {
        next(err);
    }
};
export const getTransactioncodeById = async (req, res, next) => {
    try {
        const committee = await service.getTransactioncodeById(Number(req.params.id));
        if (!committee)
            return res.status(404).json({ message: 'Committee not found' });
        res.json({ data: committee });
    }
    catch (err) {
        next(err);
    }
};
export const updateTransactioncode = async (req, res, next) => {
    try {
        const committee = await service.updateTransactioncode(Number(req.params.id), req.body);
        if (!committee)
            return res.status(404).json({ message: 'Committee not found' });
        res.json({ data: committee });
    }
    catch (err) {
        next(err);
    }
};
export const deleteTransactioncode = async (req, res, next) => {
    try {
        const committee = await service.deleteTransactioncode(Number(req.params.id), String(req.params.username));
        if (!committee)
            return res.status(404).json({ message: 'Committee not found' });
        res.json({ message: 'Committee deleted', data: committee });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=transactioncodeController.js.map