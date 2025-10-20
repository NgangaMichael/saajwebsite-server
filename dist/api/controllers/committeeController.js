import { CommitteeService } from '../../services/committeeService.js';
const service = new CommitteeService();
export const createCommittee = async (req, res, next) => {
    try {
        const committee = await service.createCommittee(req.body);
        res.status(201).json({ data: committee });
    }
    catch (err) {
        next(err);
    }
};
export const getCommittees = async (_req, res, next) => {
    try {
        const committees = await service.listCommittees();
        res.json({ data: committees });
    }
    catch (err) {
        next(err);
    }
};
export const getCommitteeById = async (req, res, next) => {
    try {
        const committee = await service.getCommitteeById(Number(req.params.id));
        if (!committee)
            return res.status(404).json({ message: 'Committee not found' });
        res.json({ data: committee });
    }
    catch (err) {
        next(err);
    }
};
export const updateCommittee = async (req, res, next) => {
    try {
        const committee = await service.updateCommittee(Number(req.params.id), req.body);
        if (!committee)
            return res.status(404).json({ message: 'Committee not found' });
        res.json({ data: committee });
    }
    catch (err) {
        next(err);
    }
};
export const deleteCommittee = async (req, res, next) => {
    try {
        const committee = await service.deleteCommittee(Number(req.params.id), String(req.params.username));
        if (!committee)
            return res.status(404).json({ message: 'Committee not found' });
        res.json({ message: 'Committee deleted', data: committee });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=committeeController.js.map