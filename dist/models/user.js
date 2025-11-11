var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Table, Column, Model, DataType } from 'sequelize-typescript';
let User = class User extends Model {
};
__decorate([
    Column({ allowNull: false, type: DataType.STRING }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({ allowNull: false, type: DataType.STRING }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Column({ type: DataType.INTEGER }),
    __metadata("design:type", Object)
], User.prototype, "age", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "gender", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "level", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "maritalStatus", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "committee", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "subCommittee", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "designation", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "membertype", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "subscription", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "subdate", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "fileNumber", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "approveStatus", void 0);
__decorate([
    Column({ type: DataType.STRING }),
    __metadata("design:type", Object)
], User.prototype, "waveSubscriptionStatus", void 0);
User = __decorate([
    Table({ tableName: 'users' })
], User);
export { User };
//# sourceMappingURL=user.js.map