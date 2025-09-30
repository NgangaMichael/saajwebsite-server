var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/models/committee.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Committee = class Committee extends Model {
    name;
    head;
    subCommittee;
    totalMembers;
    description;
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING }),
    __metadata("design:type", String)
], Committee.prototype, "name", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING }),
    __metadata("design:type", String)
], Committee.prototype, "head", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.STRING }),
    __metadata("design:type", String)
], Committee.prototype, "subCommittee", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.INTEGER }),
    __metadata("design:type", Number)
], Committee.prototype, "totalMembers", void 0);
__decorate([
    Column({ allowNull: true, type: DataType.STRING }),
    __metadata("design:type", String)
], Committee.prototype, "description", void 0);
Committee = __decorate([
    Table({ tableName: 'committees' })
], Committee);
export { Committee };
//# sourceMappingURL=committee.js.map