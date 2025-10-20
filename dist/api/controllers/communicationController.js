import { CommunicationService } from '../../services/communicationService.js';
const service = new CommunicationService();
export const createCommunication = async (req, res, next) => {
    try {
        const comm = await service.createCommunication(req.body);
        res.status(201).json({ data: comm });
    }
    catch (err) {
        next(err);
    }
};
export const getCommunications = async (_req, res, next) => {
    try {
        const comms = await service.listCommunications();
        res.json({ data: comms });
    }
    catch (err) {
        next(err);
    }
};
export const getCommunicationById = async (req, res, next) => {
    try {
        const comm = await service.getCommunicationById(Number(req.params.id));
        if (!comm)
            return res.status(404).json({ message: 'Communication not found' });
        res.json({ data: comm });
    }
    catch (err) {
        next(err);
    }
};
export const updateCommunication = async (req, res, next) => {
    try {
        const comm = await service.updateCommunication(Number(req.params.id), req.body);
        if (!comm)
            return res.status(404).json({ message: 'Communication not found' });
        res.json({ data: comm });
    }
    catch (err) {
        next(err);
    }
};
export const deleteCommunication = async (req, res, next) => {
    try {
        const comm = await service.deleteCommunication(Number(req.params.id), String(req.params.username));
        if (!comm)
            return res.status(404).json({ message: 'Communication not found' });
        res.json({ message: 'Communication deleted', data: comm });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=communicationController.js.map