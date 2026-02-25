var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let User = class User extends Model {
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], User.prototype, "username", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING, unique: true })
], User.prototype, "email", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING })
], User.prototype, "password", void 0);
__decorate([
    Column({ type: DataType.INTEGER })
], User.prototype, "age", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "dob", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "idpassport", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "phone", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "nationality", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "gender", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "level", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "maritalStatus", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "employmentstatus", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "occupation", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "committee", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "subCommittee", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "designation", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "membertype", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "staff", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "subscription", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: true })
], User.prototype, "subdate", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "fileNumber", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "approveStatus", void 0);
__decorate([
    Column({ type: DataType.STRING })
], User.prototype, "waveSubscriptionStatus", void 0);
User = __decorate([
    Table({ tableName: 'users' })
], User);
export { User };
//# sourceMappingURL=user.js.map