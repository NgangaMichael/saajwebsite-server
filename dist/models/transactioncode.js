var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// src/models/transactioncode.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let Transactioncodes = class Transactioncodes extends Model {
    userid;
    code;
    receiptno;
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Transactioncodes.prototype, "userid", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Transactioncodes.prototype, "code", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], Transactioncodes.prototype, "receiptno", void 0);
Transactioncodes = __decorate([
    Table({ tableName: 'transactioncodes' })
], Transactioncodes);
export { Transactioncodes };
//# sourceMappingURL=transactioncode.js.map