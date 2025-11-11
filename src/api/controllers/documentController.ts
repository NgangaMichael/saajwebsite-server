// src/api/controllers/documentController.ts
import type { Request, Response, NextFunction } from 'express';
import { DocumentService } from '../../services/documentService.js';

const service = new DocumentService();

// export const createDocument = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = {
//       ...req.body,          // any other fields from Postman
//       path: req.file?.path, // store the uploaded file path
//       type: req.file?.mimetype
//     };
//     const doc = await service.createDocument(data);
//     res.status(201).json({ data: doc });
//   } catch (err) {
//     next(err);
//   }
// };

// createDocument in documentController.ts
export const createDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    const { documentName, uploadedBy, description, type, committeeId, subcommitteeId } = req.body;
    const fileName = req.file?.filename; // filename only (Multer sets this)
    const mimeType = req.file?.mimetype;

    if (!documentName || !uploadedBy || !fileName) {
      return res.status(400).json({
        error: "documentName, uploadedBy, and file are required",
      });
    }

    // Save relative path instead of absolute Windows path
    const data = {
      documentName,
      uploadedBy,
      committee: committeeId,
      subcommittee: subcommitteeId,
      description,
      path: `/uploads/${fileName}`, // relative web-accessible path
      type,
      file: mimeType,
    };

    const doc = await service.createDocument(data);
    res.status(201).json({ data: doc });
  } catch (err) {
    next(err);
  }
};


export const getDocuments = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const docs = await service.listDocuments();
    res.json({ data: docs });
  } catch (err) {
    next(err);
  }
};

export const getDocumentById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const doc = await service.getDocumentById(Number(req.params.id));
    if (!doc) return res.status(404).json({ message: 'Document not found' });
    res.json({ data: doc });
  } catch (err) {
    next(err);
  }
};

export const updateDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const {
      documentName,
      uploadedBy,
      description,
      type,
      committeeId,
      subcommitteeId,
      status,
      status2
    } = req.body;

    const fileName = req.file?.filename; // Optional file update
    const mimeType = req.file?.mimetype;

    // Prepare update data
    const data: any = {
      documentName,
      uploadedBy,
      description,
      type,
      committee: committeeId,
      subcommittee: subcommitteeId,
      status: status !== undefined ? status : undefined,
      status2: status2 !== undefined ? status2 : undefined,
    };

    // If new file uploaded, update path + mime type
    if (fileName) {
      data.path = `/uploads/${fileName}`;
      data.file = mimeType;
    }

    const updated = await service.updateDocument(id, data);

    if (!updated) return res.status(404).json({ message: "Document not found" });
    res.json({ data: updated });
  } catch (err) {
    next(err);
  }
};


export const deleteDocument = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const doc = await service.deleteDocument(Number(req.params.id), String(req.params.username));
    if (!doc) return res.status(404).json({ message: 'Document not found' });
    res.json({ message: 'Document deleted', data: doc });
  } catch (err) {
    next(err);
  }
};
