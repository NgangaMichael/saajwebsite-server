import { CommunicationService } from '../../services/communicationService.js';
const service = new CommunicationService();
// Builds the JSON-storable attachment array from multer's req.files
const buildAttachments = (files) => {
    if (!files || files.length === 0)
        return [];
    return files.map((f) => ({
        originalName: f.originalname,
        filename: f.filename,
        url: `/uploads/${f.filename}`,
        mimetype: f.mimetype,
        size: f.size,
    }));
};
export const createCommunication = async (req, res, next) => {
    try {
        const attachments = buildAttachments(req.files);
        const comm = await service.createCommunication({ ...req.body, attachments });
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
export const getThread = async (req, res, next) => {
    try {
        const thread = await service.getThread(Number(req.params.id));
        res.json({ data: thread });
    }
    catch (err) {
        next(err);
    }
};
// src/api/controllers/communicationController.ts
export const updateCommunication = async (req, res, next) => {
    try {
        const newAttachments = buildAttachments(req.files);
        const payload = { ...req.body };
        // 🟢 Convert empty string, null, or undefined to integer 0
        if (payload.sendtoid === "" || payload.sendtoid === "null" || payload.sendtoid == null) {
            payload.sendtoid = 0;
        }
        else {
            payload.sendtoid = Number(payload.sendtoid) || 0;
        }
        if (newAttachments.length > 0) {
            payload.attachments = newAttachments;
        }
        const comm = await service.updateCommunication(Number(req.params.id), payload);
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