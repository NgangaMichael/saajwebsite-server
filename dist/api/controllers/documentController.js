import { DocumentService } from '../../services/documentService.js';
const service = new DocumentService();
export const createDocument = async (req, res, next) => {
    try {
        const data = {
            ...req.body, // any other fields from Postman
            path: req.file?.path, // store the uploaded file path
            type: req.file?.mimetype
        };
        const doc = await service.createDocument(data);
        res.status(201).json({ data: doc });
    }
    catch (err) {
        next(err);
    }
};
export const getDocuments = async (_req, res, next) => {
    try {
        const docs = await service.listDocuments();
        res.json({ data: docs });
    }
    catch (err) {
        next(err);
    }
};
export const getDocumentById = async (req, res, next) => {
    try {
        const doc = await service.getDocumentById(Number(req.params.id));
        if (!doc)
            return res.status(404).json({ message: 'Document not found' });
        res.json({ data: doc });
    }
    catch (err) {
        next(err);
    }
};
export const updateDocument = async (req, res, next) => {
    try {
        const doc = await service.updateDocument(Number(req.params.id), req.body);
        if (!doc)
            return res.status(404).json({ message: 'Document not found' });
        res.json({ data: doc });
    }
    catch (err) {
        next(err);
    }
};
export const deleteDocument = async (req, res, next) => {
    try {
        const doc = await service.deleteDocument(Number(req.params.id));
        if (!doc)
            return res.status(404).json({ message: 'Document not found' });
        res.json({ message: 'Document deleted', data: doc });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=documentController.js.map