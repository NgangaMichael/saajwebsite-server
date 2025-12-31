var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/models/subcommittee.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let SubCommittee = class SubCommittee extends Model {
    name;
    head;
    committee;
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], SubCommittee.prototype, "name", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], SubCommittee.prototype, "head", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.STRING })
], SubCommittee.prototype, "committee", void 0);
SubCommittee = __decorate([
    Table({ tableName: 'subcommittees' })
], SubCommittee);
export { SubCommittee };
//# sourceMappingURL=subcommittee.js.map