var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Table, Column, Model, DataType } from "sequelize-typescript";
let Meeting = class Meeting extends Model {
};
__decorate([
    Column({ type: DataType.INTEGER, allowNull: false })
], Meeting.prototype, "createdById", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Meeting.prototype, "createdByUsername", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Meeting.prototype, "title", void 0);
__decorate([
    Column({ type: DataType.TEXT, allowNull: false })
], Meeting.prototype, "description", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false, defaultValue: "Zoom" })
], Meeting.prototype, "platform", void 0);
__decorate([
    Column({ type: DataType.STRING, allowNull: false })
], Meeting.prototype, "link", void 0);
__decorate([
    Column({ type: DataType.DATE, allowNull: false })
], Meeting.prototype, "dateTime", void 0);
__decorate([
    Column({ type: DataType.STRING, defaultValue: "Active" })
], Meeting.prototype, "status", void 0);
__decorate([
    Column({ type: DataType.JSON, allowNull: false, defaultValue: [] })
], Meeting.prototype, "audience", void 0);
__decorate([
    Column({ type: DataType.JSON, allowNull: false, defaultValue: [] })
], Meeting.prototype, "extraEmails", void 0);
__decorate([
    Column({ type: DataType.TEXT, allowNull: true })
], Meeting.prototype, "adminComments", void 0);
Meeting = __decorate([
    Table({ tableName: "meetings" })
], Meeting);
export { Meeting };
//# sourceMappingURL=meeting.js.map