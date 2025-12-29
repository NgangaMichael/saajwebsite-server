var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.js";
let Loan = class Loan extends Model {
};
__decorate([
    ForeignKey(() => User),
    Column({ type: DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Loan.prototype, "userId", void 0);
__decorate([
    BelongsTo(() => User),
    __metadata("design:type", User)
], Loan.prototype, "user", void 0);
__decorate([
    Column({ type: DataType.DECIMAL(10, 2), allowNull: false }),
    __metadata("design:type", Number)
], Loan.prototype, "amount", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Loan.prototype, "purpose", void 0);
__decorate([
    Column({ type: DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Loan.prototype, "repaymentMonths", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], Loan.prototype, "reason", void 0);
__decorate([
    Column({ type: DataType.STRING, defaultValue: "Pending" }),
    __metadata("design:type", String)
], Loan.prototype, "status", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], Loan.prototype, "approvedBy", void 0);
Loan = __decorate([
    Table({ tableName: "loans" })
], Loan);
export { Loan };
//# sourceMappingURL=loan.js.map