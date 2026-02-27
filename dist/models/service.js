var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/models/service.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Service = class Service extends Model {
    servicename;
    servicelink;
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Service.prototype, "servicename", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Service.prototype, "servicelink", void 0);
Service = __decorate([
    Table({ tableName: 'service' })
], Service);
export { Service };
//# sourceMappingURL=service.js.map