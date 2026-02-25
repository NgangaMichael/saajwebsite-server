var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/models/folders.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Folder = class Folder extends Model {
    foldername;
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Folder.prototype, "foldername", void 0);
Folder = __decorate([
    Table({ tableName: 'folders' })
], Folder);
export { Folder };
//# sourceMappingURL=folders.js.map