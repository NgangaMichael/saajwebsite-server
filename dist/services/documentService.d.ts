import { DocumentRepository } from '../repositories/documentRepository.js';
export declare class DocumentService {
    repo: DocumentRepository;
    createDocument(data: any): Promise<import("../models/document.js").Document>;
    listDocuments(): Promise<import("../models/document.js").Document[]>;
    getDocumentById(id: number): Promise<import("../models/document.js").Document | null>;
    updateDocument(id: number, data: any): Promise<import("../models/document.js").Document | null>;
    deleteDocument(id: number): Promise<import("../models/document.js").Document | null>;
}
//# sourceMappingURL=documentService.d.ts.map