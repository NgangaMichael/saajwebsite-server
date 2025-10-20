var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/models/document.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Document = class Document extends Model {
    documentName;
    uploadedBy;
    accessedBy; // Could be a comma-separated list or JSON string for multiple users
    path; // Path or URL where the document is stored
    type; // 'pdf' or 'image'
    file;
    status; // e.g., 0 for inactive, 1 for active
    description; // Optional description
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING }),
    __metadata("design:type", String)
], Document.prototype, "documentName", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING }),
    __metadata("design:type", String)
], Document.prototype, "uploadedBy", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.STRING }),
    __metadata("design:type", String)
], Document.prototype, "accessedBy", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING }),
    __metadata("design:type", String)
], Document.prototype, "path", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.STRING }),
    __metadata("design:type", String)
], Document.prototype, "type", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.STRING }),
    __metadata("design:type", String)
], Document.prototype, "file", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.NUMBER }),
    __metadata("design:type", Number)
], Document.prototype, "status", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.STRING }),
    __metadata("design:type", String)
], Document.prototype, "description", void 0);
Document = __decorate([
    Table({ tableName: 'documents' })
], Document);
export { Document };
//# sourceMappingURL=document.js.map