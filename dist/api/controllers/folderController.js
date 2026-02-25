import { FolderService } from '../../services/folderService.js';
const service = new FolderService();
export const createFolder = async (req, res, next) => {
    try {
        const folder = await service.createFolder(req.body);
        res.status(201).json({ data: folder });
    }
    catch (err) {
        next(err);
    }
};
export const getFolders = async (_req, res, next) => {
    try {
        const folders = await service.listFolders();
        res.json({ data: folders });
    }
    catch (err) {
        next(err);
    }
};
export const getFolderById = async (req, res, next) => {
    try {
        const folder = await service.getFolderById(Number(req.params.id));
        if (!folder)
            return res.status(404).json({ message: 'Folder not found' });
        res.json({ data: folder });
    }
    catch (err) {
        next(err);
    }
};
export const updateFolder = async (req, res, next) => {
    try {
        const folder = await service.updateFolder(Number(req.params.id), req.body);
        if (!folder)
            return res.status(404).json({ message: 'Folder not found' });
        res.json({ data: folder });
    }
    catch (err) {
        next(err);
    }
};
export const deleteFolder = async (req, res, next) => {
    try {
        const folder = await service.deleteFolder(Number(req.params.id), String(req.params.username));
        if (!folder)
            return res.status(404).json({ message: 'Folder not found' });
        res.json({ message: 'Folder deleted', data: folder });
    }
    catch (err) {
        next(err);
    }
};
//# sourceMappingURL=folderController.js.map